import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Cpu, AlertCircle, Database, Layers, ArrowUpRight } from 'lucide-react';
import { Icons } from './BrandIcons';

export const AIResearch = () => {
  const researchProject = portfolioData.featuredProjects.find(p => p.id === 'cervical-spine-ai');

  if (!researchProject) return null;

  return (
    <section id="research" className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="AI & Machine Learning"
          title="Computer Vision Research: Cervical Spine MRI Analysis"
          description="Investigating deep neural networks and automated medical image preprocessing for stenosis identification."
        />

        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          
          {/* Research Label & Disclaimer Banner */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold uppercase tracking-wider block font-mono text-[10px]">Experimental Research Project</span>
              <p className="mt-0.5 leading-relaxed">
                This project represents exploratory computational and computer vision research into medical imaging workflows and does not make clinical or diagnostic medical claims.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {researchProject.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {researchProject.description}
            </p>
          </div>

          {/* Research Architecture Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Investigated Datasets
              </h4>
              <div className="flex flex-wrap gap-2">
                {researchProject.datasets.map((ds, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {ds}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Computer Vision Pipeline
              </h4>
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Volumetric DICOM / NIfTI parsing (pydicom, nibabel)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Slice normalization & ROI segmentation (OpenCV)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Feature extraction via EfficientNet-B3 architecture</span>
                </div>
              </div>
            </div>

          </div>

          {/* Technical Stack Tags */}
          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {researchProject.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {researchProject.githubUrl && (
              <a
                href={researchProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Icons.Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

