import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Education"
          title="Academic Background"
          description="Formal computer science and engineering coursework from foundational diploma through undergraduate degree."
        />

        <div className="space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 sm:text-right font-mono">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2 pl-0 sm:pl-13">
                {item.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

