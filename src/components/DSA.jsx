import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, Wifi, WifiOff, RefreshCw, Flame, TrendingUp } from 'lucide-react';

const CACHE_KEY = 'lc_problems_solved';
const CACHE_TIMESTAMP_KEY = 'lc_problems_solved_at';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes
const AUTO_REFRESH_MS = 30 * 60 * 1000; // auto-refresh interval

/* ─── Multi-endpoint fetch with fallback ─────────────────────────── */
async function tryFetch(url, signal, selector) {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const count = selector(data);
  if (typeof count !== 'number' || isNaN(count)) throw new Error('No count');
  return count;
}

async function fetchFromLeetCode(username, signal) {
  const ENDPOINTS = [
    {
      url: `https://alfa-leetcode-api.onrender.com/${username}/solved`,
      sel: (d) => d.solvedProblem ?? d.totalSolved ?? null,
    },
    {
      url: `https://leetcode-stats-api.herokuapp.com/${username}`,
      sel: (d) => d.totalSolved ?? null,
    },
  ];
  for (const ep of ENDPOINTS) {
    try {
      const count = await tryFetch(ep.url, signal, ep.sel);
      return count;
    } catch (_) {
      // try next
    }
  }
  // GraphQL direct (last resort)
  try {
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query ($username: String!) {
          matchedUser(username: $username) {
            submitStats { acSubmissionNum { difficulty count } }
          }
        }`,
        variables: { username },
      }),
      signal,
    });
    if (res.ok) {
      const json = await res.json();
      const arr = json?.data?.matchedUser?.submitStats?.acSubmissionNum;
      const allEntry = arr?.find((e) => e.difficulty === 'All');
      if (typeof allEntry?.count === 'number') return allEntry.count;
    }
  } catch (_) {}
  throw new Error('All endpoints failed');
}

function getCached() {
  try {
    const val = localStorage.getItem(CACHE_KEY);
    const ts = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    if (val && ts) {
      return { count: parseInt(val, 10), timestamp: parseInt(ts, 10) };
    }
  } catch (_) {}
  return null;
}

function setCache(count) {
  try {
    localStorage.setItem(CACHE_KEY, String(count));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, String(Date.now()));
  } catch (_) {}
}

function formatRelativeTime(ts) {
  if (!ts) return '';
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

/* ─── Component ─────────────────────────────────────────────────── */
export const DSA = () => {
  const { dsa } = portfolioData;

  const [problemCount, setProblemCount] = useState(null);
  // 'loading' | 'live' | 'cached' | 'offline' | 'error'
  const [status, setStatus] = useState('loading');
  const [isOnline, setIsOnline] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const autoRefreshRef = useRef(null);

  const fetchLeetCode = useCallback(async ({ manual = false } = {}) => {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      const cached = getCached();
      if (cached) {
        setProblemCount(cached.count);
        setLastUpdated(cached.timestamp);
        setStatus('cached');
      } else {
        setStatus('offline');
      }
      return;
    }

    if (!manual) setStatus('loading');
    if (manual) setIsRefreshing(true);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);

    try {
      const count = await fetchFromLeetCode(dsa.leetcodeUsername, controller.signal);
      clearTimeout(timer);
      setCache(count);
      setProblemCount(count);
      setLastUpdated(Date.now());
      setStatus('live');
    } catch (_) {
      clearTimeout(timer);
      const cached = getCached();
      if (cached) {
        setProblemCount(cached.count);
        setLastUpdated(cached.timestamp);
        setStatus('cached');
      } else {
        setStatus('error');
      }
    } finally {
      setIsRefreshing(false);
    }
  }, [dsa.leetcodeUsername]);

  // Initial load
  useEffect(() => {
    // Safely read navigator.onLine only inside effect (after mount)
    setIsOnline(typeof navigator !== 'undefined' ? navigator.onLine : true);

    const cached = getCached();
    if (cached) {
      setProblemCount(cached.count);
      setLastUpdated(cached.timestamp);
      // Fresh cache — show as live, still refresh if stale
      if (Date.now() - cached.timestamp > CACHE_TTL_MS) {
        fetchLeetCode();
      } else {
        setStatus('live');
      }
    } else {
      fetchLeetCode();
    }
  }, [fetchLeetCode]);

  /* ── Auto-refresh every 30 min when online ── */
  useEffect(() => {
    autoRefreshRef.current = setInterval(() => {
      if (typeof navigator !== 'undefined' && navigator.onLine) {
        fetchLeetCode();
      }
    }, AUTO_REFRESH_MS);
    return () => clearInterval(autoRefreshRef.current);
  }, [fetchLeetCode]);

  /* ── Online / offline listeners ── */
  useEffect(() => {
    const onOnline = () => {
      setIsOnline(true);
      fetchLeetCode();
    };
    const onOffline = () => {
      setIsOnline(false);
      const cached = getCached();
      if (cached) {
        setProblemCount(cached.count);
        setLastUpdated(cached.timestamp);
        setStatus('cached');
      } else {
        setStatus('offline');
      }
    };
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, [fetchLeetCode]);

  /* ── Status badge config ── */
  function getStatusBadge() {
    switch (status) {
      case 'live':
        return {
          icon: <Wifi className="w-3 h-3" />,
          label: 'Live',
          color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900',
        };
      case 'cached':
        return {
          icon: <WifiOff className="w-3 h-3" />,
          label: 'Cached',
          color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900',
        };
      case 'offline':
        return {
          icon: <WifiOff className="w-3 h-3" />,
          label: 'Offline',
          color: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900',
        };
      case 'error':
        return {
          icon: <WifiOff className="w-3 h-3" />,
          label: 'Unavailable',
          color: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900',
        };
      default: // loading
        return {
          icon: <RefreshCw className="w-3 h-3 animate-spin" />,
          label: 'Syncing…',
          color: 'text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
        };
    }
  }

  const sc = getStatusBadge();

  return (
    <section id="dsa" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Data Structures & Algorithms"
          title="Problem Solving & Algorithmic Practice"
          description="Consistent problem solving focused on computational complexity, spatial optimization, and data structures in Java."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* LeetCode Profile Snapshot */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex flex-col justify-between space-y-5 ring-1 ring-slate-100 dark:ring-transparent">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-500 block mb-1">
                  LeetCode Profile
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  @{dsa.leetcodeUsername}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Primary Language:{' '}
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{dsa.primaryLanguage}</span>
                </p>
              </div>
              {/* Status badge */}
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold font-mono border ${sc.color}`}>
                {sc.icon}
                {sc.label}
              </span>
            </div>

            {/* Problems Solved Counter */}
            <div className="rounded-xl overflow-hidden border border-indigo-100 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-950/50 dark:via-violet-950/40 dark:to-purple-950/30">
              {status === 'loading' && problemCount === null ? (
                <div className="flex flex-col items-center gap-2 py-6">
                  <RefreshCw className="w-6 h-6 text-indigo-400 animate-spin" />
                  <p className="text-xs text-slate-500 dark:text-slate-400">Fetching from LeetCode…</p>
                </div>
              ) : status === 'offline' && problemCount === null ? (
                <div className="flex flex-col items-center gap-2 py-6">
                  <WifiOff className="w-6 h-6 text-slate-400" />
                  <p className="text-xs text-slate-500 dark:text-slate-400">No data available offline</p>
                </div>
              ) : (
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Flame className="w-6 h-6 text-orange-400 drop-shadow-sm" />
                    <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 font-mono tabular-nums leading-none">
                      {problemCount ?? '—'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1">
                    Problems Solved on LeetCode
                  </p>

                  {/* Refresh row */}
                  <div className="mt-2 flex items-center justify-center gap-1.5">
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                      {lastUpdated
                        ? `${status === 'cached' ? 'cached' : 'updated'} · ${formatRelativeTime(lastUpdated)}`
                        : ''}
                    </p>
                    {isOnline && (
                      <button
                        type="button"
                        onClick={() => fetchLeetCode({ manual: true })}
                        disabled={isRefreshing}
                        title="Refresh now"
                        className="inline-flex items-center gap-0.5 text-[10px] text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <RefreshCw className={`w-2.5 h-2.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                        <span>refresh</span>
                      </button>
                    )}
                  </div>

                  {/* Difficulty pills */}
                  <div className="mt-3 flex gap-1 justify-center text-[9px] font-mono font-semibold">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">Easy</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">Medium</span>
                    <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800">Hard</span>
                  </div>
                </div>
              )}
            </div>

            {/* Auto-refresh notice */}
            <p className="text-[9px] text-slate-400 dark:text-slate-600 font-mono text-center -mt-2">
              auto-refreshes every 30 min when online
            </p>

            <a
              href={dsa.leetcodeProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-amber-500 hover:bg-amber-400 dark:bg-amber-600 dark:hover:bg-amber-500 transition-colors shadow-sm shadow-amber-200 dark:shadow-none"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* DSA Topic Badges */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none ring-1 ring-slate-100 dark:ring-transparent">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                Core Algorithmic Topics Covered
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {dsa.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              Practicing fundamental time &amp; space complexity analysis (Big-O), iterative and recursive implementations, and memory management with the Java Collections framework.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
