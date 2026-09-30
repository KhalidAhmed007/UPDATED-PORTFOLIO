import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, Quote } from 'lucide-react';

export const Experience = () => {
  const { experience, testimonials } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Work Experience & Milestones
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Proven track record of engineering leadership, scalable product delivery, and cross-functional collaboration.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central guide line */}
          <div className="absolute top-2 bottom-2 left-4 md:left-1/2 -ml-px w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 flex items-center justify-center text-indigo-600 shadow-md shadow-indigo-500/20 z-10">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Card wrapper */}
                  <div className="ml-12 md:ml-0 md:w-[45%]">
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="text-slate-400">{item.company}</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                        {item.role}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.technologies.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Quote Cards */}
        {testimonials && testimonials.length > 0 && (
          <div className="mt-24 max-w-4xl mx-auto">
            <h3 className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">
              Endorsements & Recommendations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                >
                  <Quote className="w-8 h-8 text-indigo-500/20 absolute top-4 right-4" />
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed mb-4">
                    "{test.quote}"
                  </p>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                      {test.author}
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      {test.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

