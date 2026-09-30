import React from 'react';

export const SectionHeading = ({ tag, title, description, align = 'center' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {tag && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
          <span className="text-indigo-500">#</span> {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};

