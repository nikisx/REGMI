import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-regmi-600 rounded-full opacity-80"></span>
      </h2>
      {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">{subtitle}</p>}
    </div>
  );
};