import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Check, Calendar } from 'lucide-react';
import { Icons } from './BrandIcons';

export const Projects = () => {
  const { featuredProjects, secondaryProjects } = portfolioData;

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Projects"
          title="Featured Software Engineering Work"
          description="Detailed backend and full-stack systems demonstrating normalized database schemas, Docker containerization, AWS deployments, and REST API architecture."
        />

        {/* Featured Projects Detailed Grid */}
        <div className="space-y-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Left: Project Info & Features */}
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                        Live Production
                      </span>
                    )}
                    {project.period && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono ml-auto lg:ml-0 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Datasets if research */}
                  {project.datasets && (
                    <div className="text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">Investigated Datasets: </span>
                      <span className="text-slate-600 dark:text-slate-400 font-mono">
                        {project.datasets.join(', ')}
                      </span>
                    </div>
                  )}

                  {/* Key Features List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-mono">
                      Engineering Highlights
                    </h4>
                    <div className="space-y-2">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-normal">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-1 rounded text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="lg:w-48 flex lg:flex-col gap-3 pt-2 lg:pt-0 shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700 shadow-xs"
                    >
                      <Icons.Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Secondary Projects Section */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
            Additional Projects & Utilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-3 space-y-1">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <Icons.Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
