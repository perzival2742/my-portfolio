import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Download, Code2, User, Briefcase, GraduationCap, Mail, Compass } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'My Path', href: '#my-path', icon: Compass },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/85 dark:bg-[#0b0d12]/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800/80 shadow-lg shadow-black/5 dark:shadow-black/60' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo (Clean border, no gradient around pic) */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700/60 group-hover:border-maroon-600/50 dark:group-hover:border-maroon-400/50 group-hover:scale-105 transition-all duration-300 bg-white dark:bg-slate-900">
            <img 
              src="/bot-avatar.png" 
              alt="Avin Saji" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-maroon-600 dark:group-hover:text-maroon-400 transition-colors">
              Avin Saji
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400 font-mono">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-300 rounded-full hover:bg-maroon-600/10 dark:hover:bg-maroon-900/20 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Theme Switcher */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:bg-maroon-600/10 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400/90" /> : <Moon className="w-4 h-4 text-maroon-700" />}
          </button>

          <a
            href={profileData.resumeUrl}
            download="Avin_Saji_Resume.pdf"
            className="px-4 py-2 text-xs font-semibold rounded-full bg-maroon-700 hover:bg-maroon-600 dark:bg-maroon-800 dark:hover:bg-maroon-700 text-white shadow-md transition-all flex items-center gap-1.5 border border-maroon-600/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-maroon-600/10 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400/90" /> : <Moon className="w-4 h-4 text-maroon-700" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-maroon-600/10 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-2 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-maroon-600/10 dark:hover:bg-slate-800 hover:text-maroon-600 dark:hover:text-maroon-300"
                >
                  <Icon className="w-4 h-4 text-maroon-600 dark:text-maroon-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href={profileData.resumeUrl}
                download="Avin_Saji_Resume.pdf"
                className="w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-maroon-700 dark:bg-maroon-800 text-white flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
