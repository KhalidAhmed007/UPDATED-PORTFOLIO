import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';

export const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Certifications & Learning"
          title="Verified Credentials & Technical Certifications"
          description="Industry-recognized technical certifications demonstrating hands-on proficiency in containerization, cloud, and programming."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="tech-card p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">
                    {cert.issuer}
                  </span>
                  {cert.period && (
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {cert.period}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {cert.title}
                </h3>

                <p className="mt-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Verification link */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 hover:underline"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>View Verified Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>Credential Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
