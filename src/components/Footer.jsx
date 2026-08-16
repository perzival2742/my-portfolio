import React from 'react';
import { profileData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-[#08090d] border-t border-slate-200 dark:border-maroon-900/40 text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
              Avin Saji
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              © {new Date().getFullYear()} Avin Saji.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs font-medium">
            <a href="#my-path" className="hover:text-maroon-500 transition-colors">My Path</a>
            <a href="#skills" className="hover:text-maroon-500 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-maroon-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-maroon-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-maroon-500 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-card hover:bg-maroon-600/10 hover:text-maroon-500 transition-all text-xs flex items-center gap-1 font-mono"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-maroon-500" />
            <span className="hidden sm:inline">Top</span>
          </button>

        </div>
      </div>
    </footer>
  );
};
