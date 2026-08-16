import React from 'react';
import { profileData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-100/60 dark:bg-[#0c0e15]/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-600/10 text-maroon-700 dark:text-maroon-300 text-xs font-mono font-medium border border-maroon-500/20">
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Track record of driving enterprise microservices, cloud deployments, and production reliability.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-maroon-600 via-maroon-500 to-amber-500 -translate-x-1/2 hidden sm:block opacity-60" />

          <div className="space-y-12 relative">
            {profileData.experience.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-center group ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                
                {/* Center Node Indicator */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-maroon-500 shadow-lg shadow-maroon-900/40 flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-maroon-400 animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 glass-card p-6 rounded-2xl border border-slate-200 dark:border-maroon-600/20 hover:border-maroon-500/50 transition-all duration-300">
                  
                  {/* Period & Role Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-600/10 text-maroon-800 dark:text-maroon-300 text-xs font-mono font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <MapPin className="w-3 h-3 text-maroon-500" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-maroon-600 dark:group-hover:text-maroon-400 transition-colors">
                    {item.role}
                  </h3>
                  
                  <div className="text-sm font-medium text-maroon-700 dark:text-maroon-400 mb-4 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-5 text-sm text-slate-600 dark:text-slate-300">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-maroon-600 dark:text-maroon-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60 dark:border-maroon-900/30">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-[#12151e] text-slate-700 dark:text-maroon-200 border border-slate-200 dark:border-maroon-600/20"
                      >
                        {tag}
                      </span>
                    ))}
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
