import React from 'react';
import { profileData } from '../data/portfolioData';
import { BookOpen, Database } from 'lucide-react';

export const Publications = () => {
  return (
    <section className="py-16 relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-maroon-500/30 relative overflow-hidden gradient-border-emerald">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-600/10 text-maroon-700 dark:text-maroon-300 text-xs font-mono font-medium border border-maroon-500/20">
                <BookOpen className="w-3.5 h-3.5" />
                <span>RESEARCH & PUBLICATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                {profileData.publication.title}
              </h3>

              <p className="text-sm font-mono text-maroon-700 dark:text-maroon-300 font-semibold">
                Presented at: {profileData.publication.event}
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {profileData.publication.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-maroon-700/10 via-maroon-600/5 to-amber-500/10 border border-maroon-500/20 text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-maroon-600/20 text-maroon-400 flex items-center justify-center mx-auto">
                  <Database className="w-6 h-6 text-maroon-600 dark:text-maroon-400" />
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  Data Mining & Churn Analysis
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Machine Learning Pattern Recognition
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
