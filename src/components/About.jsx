import React from 'react';
import { profileData } from '../data/portfolioData';
import { Compass, Users, Database, Code2, ShieldCheck, Zap, Code, GraduationCap, CheckCircle2, Terminal } from 'lucide-react';

export const About = () => {
  return (
    <section id="my-path" className="py-24 relative bg-slate-100/60 dark:bg-[#0c0e15]/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-600/10 text-maroon-700 dark:text-maroon-300 text-xs font-mono font-medium border border-maroon-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>MY PATH & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
            End-to-End Product Ownership & Clean Code
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            I don't just write code to specs — I take full ownership of the product lifecycle.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Personal Story Box */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-maroon-700 dark:text-maroon-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-maroon-600 dark:text-maroon-400" />
                <span>How I Approach Software</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white leading-snug">
                "Discovery, DB Design, Clean Code — No Compromises."
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {profileData.summary}
              </p>
            </div>

            {/* Core Values Bullet List */}
            <div className="pt-6 border-t border-slate-200 dark:border-maroon-900/30">
              <h4 className="text-xs font-mono text-maroon-700 dark:text-maroon-400 uppercase tracking-wider mb-4 font-bold">
                My Core Engineering Rules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-maroon-600 dark:text-maroon-400 shrink-0" />
                  <span>Problem Discovery & Requirement Analysis</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-maroon-600 dark:text-maroon-400 shrink-0" />
                  <span>Direct Stakeholder Collaboration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-maroon-600 dark:text-maroon-400 shrink-0" />
                  <span>Custom DB Schema Architecture</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-maroon-600 dark:text-maroon-400 shrink-0" />
                  <span>Clean Code & Best Development Practices</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Superpower Focus Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileData.superpowers.map((sp, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-maroon-600/20 hover:border-maroon-500/50"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-maroon-600/10 text-maroon-600 dark:text-maroon-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {idx === 0 && <Compass className="w-5 h-5" />}
                    {idx === 1 && <Users className="w-5 h-5" />}
                    {idx === 2 && <Database className="w-5 h-5" />}
                    {idx === 3 && <Code2 className="w-5 h-5" />}
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                    {sp.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {sp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
