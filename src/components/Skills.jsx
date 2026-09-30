import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Server, Database, Code2, Terminal, Cloud, Layers } from 'lucide-react';

const skillCategories = [
  {
    key: 'backend',
    title: 'Backend Engineering',
    icon: Server,
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10'
  },
  {
    key: 'databases',
    title: 'Databases & Schema Design',
    icon: Database,
    color: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-indigo-500/10'
  },
  {
    key: 'frontend',
    title: 'Frontend Development',
    icon: Code2,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    key: 'languages',
    title: 'Programming Languages',
    icon: Terminal,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    key: 'cloudDevops',
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10'
  },
  {
    key: 'coreCsTools',
    title: 'Core CS & Developer Tools',
    icon: Layers,
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-500/10'
  }
];

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 sm:py-20 bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Skills & Technologies"
          title="Technical Competencies"
          description="Technologies, databases, and computer science fundamentals I utilize to construct production-ready backend systems and full-stack software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const items = skills[category.key] || [];

            return (
              <div
                key={category.key}
                className="tech-card p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-lg ${category.bgColor} ${category.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
