import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { name: 'About',         href: '#about'          },
  { name: 'Skills',        href: '#skills'         },
  { name: 'Projects',      href: '#projects'       },
  { name: 'Resume',        href: '#resume'         },
  { name: 'AI / Research', href: '#research'       },
  { name: 'DSA',           href: '#dsa'            },
  { name: 'Education',     href: '#education'      },
  { name: 'Certifications',href: '#certifications' },
  { name: 'Contact',       href: '#contact'        },
];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection,  setActiveSection]  = useState('hero');

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setIsScrolled(y > 25);

      // Active section detection
      if (y < 100) { setActiveSection('hero'); return; }
      const ids = ['about','skills','projects','resume','research','dsa','education','certifications','contact'];
      const pos = y + 200;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-3 sm:px-6 pt-3 sm:pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-xl transition-all duration-200 border ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-md py-2.5 px-4 sm:px-6'
            : 'bg-white/80 dark:bg-slate-950/75 backdrop-blur-sm border-slate-200/80 dark:border-slate-800/60 shadow-xs py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">

          {/* ── Logo area ── */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-0.5"
            aria-label="Khaleed Ahmed – Portfolio Home"
          >
            {/*
              Logo slot — 32×32px.
              Contains two overlapping elements:

              1. #navbar-ka-box   — the "KA" square.
                 TravellingPhoto reads this id and fades it to opacity=0
                 imperatively as the photo arrives.

              2. #profile-nav-anchor — an empty div, same size (32px).
                 TravellingPhoto reads its getBoundingClientRect() every
                 frame to know where to travel to.
                 It renders NO image itself — the TravellingPhoto IS the image.
            */}
            <div className="relative w-8 h-8 flex-shrink-0">
              {/* KA square — faded out imperatively by TravellingPhoto */}
              <div
                id="navbar-ka-box"
                className="absolute inset-0 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs shadow-sm group-hover:bg-indigo-500 transition-colors"
                style={{ transition: 'none' }}
              >
                KA
              </div>

              {/* Navigation anchor — measurement only, contains nothing */}
              <div
                id="profile-nav-anchor"
                className="absolute inset-0 rounded-full"
                aria-hidden="true"
                style={{ pointerEvents: 'none' }}
              />
            </div>

            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white">
              {portfolioData.personal.preferredName}
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all duration-150 ${
                    active
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300/80 dark:border-slate-700 transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              {theme === 'dark'
                ? <><Sun  className="w-4 h-4 text-amber-400"  /><span className="hidden sm:inline">Light</span></>
                : <><Moon className="w-4 h-4 text-indigo-600" /><span className="hidden sm:inline">Dark</span></>
              }
            </button>

            <a
              href="#resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(o => !o)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-1.5 pb-2">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
