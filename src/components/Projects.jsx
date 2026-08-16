import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { ExternalLink, Github, Zap, Layers, Shield, Cpu, Database, Check } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Enterprise & Cloud', 'Mobile & LMS', 'Financial Engine', 'Concurrency & Dynamic UI'];

  const filteredProjects = filter === 'All'
    ? profileData.projects
    : profileData.projects.filter(p => p.category === filter || p.category.includes(filter));

  return (
    <section id="projects" className="py-24 relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-600/10 text-maroon-700 dark:text-maroon-300 text-xs font-mono font-medium border border-maroon-500/20">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Key Engineering Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Enterprise platforms, Vert.x microservices, cross-platform LMS, and financial engines built for real-world impact.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                filter === cat
                  ? 'bg-maroon-700 dark:bg-maroon-600 text-white shadow-lg shadow-maroon-700/30'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:border-maroon-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-maroon-500/60 hover:shadow-2xl hover:shadow-maroon-950/40 transition-all duration-300 relative gradient-border-emerald"
            >
              <div>
                {/* Badge & Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-maroon-600/10 text-maroon-800 dark:text-maroon-300 text-[11px] font-mono font-semibold border border-maroon-500/20">
                    {project.badge}
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-200/60 dark:bg-maroon-950/60 text-slate-700 dark:text-maroon-300 hover:text-maroon-500 hover:bg-maroon-500/20 transition-all"
                      title="View Code on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-maroon-600 dark:group-hover:text-maroon-400 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-maroon-700 dark:text-maroon-400 mb-3">
                  {project.category}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Metric Highlight */}
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#12151e] border border-slate-200 dark:border-maroon-600/20 mb-4">
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                    <Zap className="w-4 h-4 text-maroon-600 dark:text-maroon-400 shrink-0 mt-0.5" />
                    <span>{project.impact}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tech Tags & Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60 dark:border-maroon-900/30">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-[11px] font-mono bg-slate-200/50 dark:bg-[#12151e] text-slate-700 dark:text-maroon-200 border border-slate-300 dark:border-maroon-600/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div className="mt-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon-700 dark:text-maroon-400 hover:underline"
                    >
                      <span>Explore Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
