import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Terminal, Code2, Cpu } from 'lucide-react';

export const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="About Me"
          title="Software Engineer. AI/ML Enthusiast. Problem Solver."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Main Narrative */}
          <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {personal.summary.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            <p>
              I believe in writing clean, well-structured code, understanding the underlying algorithms, and learning continuously through real-world projects. I am actively seeking internship opportunities where I can contribute to production-grade applications.
            </p>
          </div>

          {/* Highlights Card */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs">
            <div>
              <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1">Status</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200">{personal.currentRole}</p>
              <p className="text-slate-500 mt-0.5">KITSW (2024 – 2027)</p>
            </div>

            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800">
              <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1">Target Roles</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200">{personal.careerTarget}</p>
            </div>

            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800">
              <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1">Primary Stacks</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200">React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Java (DSA)</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
