import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { Icons } from './BrandIcons';

export const Footer = () => {
  const { personal, dsa } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {personal.fullName}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Software Engineer &amp; AI/ML Enthusiast • B.Tech IT at KITSW
            </p>
          </div>

          {/* Profiles and Links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Icons.Github className="w-4 h-4" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Icons.Linkedin className="w-4 h-4" />
            </a>
            <a
              href={dsa.leetcodeProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-slate-500 hover:text-amber-500 transition-colors"
              aria-label="LeetCode Profile"
            >
              [LeetCode]
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className="ml-2 flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
