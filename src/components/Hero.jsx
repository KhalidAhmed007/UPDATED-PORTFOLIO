import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, MapPin, FileText } from 'lucide-react';
import { Icons } from './BrandIcons';
import { HeroPhotoAnchor } from './ProfileScrollTransition';

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 tech-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout on desktop: text left, photo right */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
          
          {/* LEFT: Text Content */}
          <div className="flex-1 min-w-0">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>B.Tech IT • Open to Software Engineering Internships</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{personal.preferredName}</span>.
                <br />
                <span className="text-slate-800 dark:text-slate-100 font-extrabold text-2xl sm:text-4xl lg:text-5xl">
                  Software Engineer &amp; AI/ML Enthusiast
                </span>
              </h1>

              {/* Role pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {personal.roles.map((r, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/80 dark:border-slate-700"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed pt-2">
                I build resilient backend systems and full-stack web applications using{' '}
                <strong className="text-slate-900 dark:text-slate-100 font-semibold">Node.js</strong>,{' '}
                <strong className="text-slate-900 dark:text-slate-100 font-semibold">Express.js</strong>,{' '}
                <strong className="text-slate-900 dark:text-slate-100 font-semibold">PostgreSQL</strong>,{' '}
                <strong className="text-slate-900 dark:text-slate-100 font-semibold">React</strong>, and{' '}
                <strong className="text-slate-900 dark:text-slate-100 font-semibold">Next.js</strong>{' '}
                — while exploring AI/ML through computer vision research and problem solving in Java.
              </p>

              {/* Location & College */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  {personal.location}
                </span>
                <span>•</span>
                <span>Kakatiya Institute of Technology &amp; Science (KITSW)</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 shadow-xs transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2 sm:ml-auto pt-2 sm:pt-0">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
                >
                  <Icons.Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
                >
                  <Icons.Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-lg text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors shadow-xs font-mono text-xs font-bold"
                >
                  [LC]
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Profile Photo anchor (desktop) */}
          <div className="hidden md:flex flex-col items-center justify-center flex-shrink-0 mt-10 md:mt-0">
            <HeroPhotoAnchor size={200} />
          </div>

        </div>

        {/* MOBILE: Profile Photo anchor below text */}
        <div className="flex md:hidden justify-center mt-10">
          <HeroPhotoAnchor size={140} />
        </div>

      </div>
    </section>
  );
};
