import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Terminal, ArrowUpRight } from 'lucide-react';
import { Icons } from './BrandIcons';

export const CodingProfiles = () => {
  const { personal, dsa } = portfolioData;

  const profiles = [
    {
      platform: "GitHub",
      username: personal.social.githubUsername,
      role: "Source Code & Projects",
      description: "Explore repositories, commits, and open-source contributions across React, Node.js, and Python.",
      url: personal.social.github,
      icon: Icons.Github,
      badge: "Active Repositories"
    },
    {
      platform: "LinkedIn",
      username: "mohammed-khaleed-ahmed-phd",
      role: "Professional Network",
      description: "Connect with me for engineering internships, full-stack development roles, and project collaborations.",
      url: personal.social.linkedin,
      icon: Icons.Linkedin,
      badge: "Professional Profile"
    },
    {
      platform: "LeetCode",
      username: dsa.leetcodeUsername,
      role: "Algorithmic Practice",
      description: "Consistent problem solving in Java covering Data Structures, Sorting, Binary Search, and Optimization.",
      url: dsa.leetcodeProfile,
      icon: null,
      badge: `${dsa.problemsSolved}`
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Online Presence"
          title="GitHub & Coding Profiles"
          description="Verified links to inspect my code, algorithmic practice, and professional background."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((prof, idx) => {
            const Icon = prof.icon;
            return (
              <a
                key={idx}
                href={prof.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200/60 dark:border-indigo-800/60">
                      {prof.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    {Icon ? (
                      <Icon className="w-5 h-5 text-slate-800 dark:text-slate-200" />
                    ) : (
                      <span className="font-mono font-bold text-amber-500 text-sm">[LC]</span>
                    )}
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {prof.platform}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                    @{prof.username}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {prof.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  <span>Visit {prof.platform}</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

