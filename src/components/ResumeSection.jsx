import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { FileText, Download, ExternalLink, Check, Copy, Sparkles, Eye, Terminal } from 'lucide-react';

export const ResumeSection = () => {
  const { personal, education, dsa } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-16 sm:py-20 bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Curriculum Vitae"
          title="Resume & Professional Background"
          description="A complete breakdown of academic qualifications, backend engineering competencies, verified certifications, and project experience."
        />

        {/* Paper-styled Technical Resume Presentation Card */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden">
          
          {/* Resume Header Bar */}
          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {personal.fullName}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                {personal.roles.join(' • ')}
              </p>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {personal.location} | {personal.email} | {personal.phone}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${personal.email}?subject=Software%20Engineering%20Opportunity%20%E2%80%93%20${encodeURIComponent(personal.fullName)}`}
                onClick={(e) => {
                  // Attempt to open email client without navigating away
                  e.preventDefault();
                  window.open(
                    `mailto:${personal.email}?subject=Software%20Engineering%20Opportunity%20%E2%80%93%20${encodeURIComponent(personal.fullName)}`,
                    '_blank'
                  );
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <span>Hire Khaleed</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors shadow-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Resume Body Structure */}
          <div className="p-6 sm:p-8 space-y-8 text-xs sm:text-sm">
            
            {/* Professional Summary */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Summary
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Software Engineering candidate with strong foundations in Java, Data Structures & Algorithms, and Object-Oriented Programming, having solved 140+ problems in Java on LeetCode. Experienced in backend development using Node.js and Express.js, REST API design, JWT authentication, and database engineering with PostgreSQL and MongoDB. Focused on clean software engineering practices, cloud containerization, and shipping full-stack systems end-to-end to production.
              </p>
            </div>

            {/* Education Summary */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 border-b border-slate-200 dark:border-slate-800 pb-1">
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">
                        {edu.institution}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 text-xs">
                        {edu.degree} {edu.cgpa && <span className="font-semibold text-indigo-600 dark:text-indigo-400">• CGPA: {edu.cgpa}</span>}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Skill Inventory */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 border-b border-slate-200 dark:border-slate-800 pb-1">
                Technical Skill Inventory
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Backend & Databases</span>
                  <span className="text-slate-600 dark:text-slate-300">Node.js, Express.js, PostgreSQL, SQL, MongoDB, Prisma ORM, REST API Design, JWT, Middleware</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Cloud & DevOps</span>
                  <span className="text-slate-600 dark:text-slate-300">Docker, Docker Compose, AWS (EC2, S3, IAM), GitHub Actions, Linux, Nginx, Shell Scripting</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Programming Languages</span>
                  <span className="text-slate-600 dark:text-slate-300">Java, JavaScript, Python, C++, SQL</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Frontend & Core CS</span>
                  <span className="text-slate-600 dark:text-slate-300">React.js, Next.js, Tailwind CSS, HTML, CSS, Data Structures & Algorithms (140+ LeetCode)</span>
                </div>
              </div>
            </div>

            {/* Key Project Accomplishments */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 border-b border-slate-200 dark:border-slate-800 pb-1">
                Selected Project Deployments
              </h4>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-slate-900 dark:text-white">
                      RentEase — Car Rental System
                    </span>
                    <a
                      href="https://rentease.khaleedahmed.codes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <span>rentease.khaleedahmed.codes</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    Next.js, Node.js, Express.js, PostgreSQL, Docker, Docker Compose, GitHub Actions, AWS EC2
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    <li>Designed normalized PostgreSQL schema across users, vehicles, bookings, and payments tables.</li>
                    <li>Containerized frontend, backend, and PostgreSQL database with Docker Compose and deployed to AWS EC2 via Nginx.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-slate-900 dark:text-white">
                      NotesHub — Full-Stack Notes Sharing Platform
                    </span>
                    <a
                      href="https://noteshub.khaleedahmed.codes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <span>noteshub.khaleedahmed.codes</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    React.js, Node.js, Express.js, MongoDB, AWS S3, JWT, Vercel, Render
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    <li>Designed and implemented 15+ REST APIs for authentication, note categorization, and search.</li>
                    <li>Migrated file storage to AWS S3 using IAM-scoped access for secure object storage.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

