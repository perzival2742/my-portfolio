import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Terminal, CheckCircle2, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { TypewriterRole } from './TypewriterRole';

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-dot-pattern">
      {/* Background Animated Orbs — Muted Maroon & Warm Amber */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-maroon-800/10 dark:bg-maroon-950/20 blur-3xl animate-orb-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-amber-700/5 dark:bg-amber-900/10 blur-3xl animate-orb-reverse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & CTAs Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-600/10 dark:bg-maroon-950/40 border border-maroon-500/20 dark:border-maroon-800/30 text-maroon-700 dark:text-maroon-300 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-maroon-600 dark:bg-maroon-400 animate-pulse" />
              <Terminal className="w-3.5 h-3.5 text-maroon-600 dark:text-maroon-400" />
              <span>SDE @ Kristu Jayanti SDC · Open for Opportunities</span>
            </div>

            {/* Main Name (Solid text, no gradient) & Typewriter Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="text-maroon-700 dark:text-slate-100">Avin Saji</span>
              </h1>
              
              {/* Typewriter Role Animation */}
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl font-display font-medium text-slate-600 dark:text-slate-400">
                  I am a
                </span>
                <TypewriterRole roles={profileData.roles} />
              </div>
            </div>

            {/* Hero Subtitle Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Specializing in asynchronous <span className="font-semibold text-maroon-700 dark:text-maroon-300">Vert.x & Spring Boot Java services</span>, cloud-native <span className="font-semibold text-amber-700 dark:text-amber-300/90">AWS microservices</span>, and responsive <span className="font-semibold text-maroon-700 dark:text-maroon-300">Angular & Ionic applications</span>.
            </p>

            {/* Core Capability Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {['Vert.x & Spring Boot', 'AWS EC2 / ECS / Lambda', 'MongoDB & Redis Caching', 'Angular & Ionic', 'Docker Containerization'].map((badge) => (
                <span key={badge} className="px-3 py-1 rounded-md bg-slate-200/80 dark:bg-slate-800/60 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700/50 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-maroon-600 dark:text-maroon-400" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={profileData.resumeUrl}
                download="Avin_Saji_Resume.pdf"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-maroon-700 hover:bg-maroon-600 dark:bg-maroon-800 dark:hover:bg-maroon-700 text-white shadow-lg shadow-maroon-950/30 hover:shadow-maroon-900/40 transition-all flex items-center gap-2 group border border-maroon-600/30"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-medium text-sm glass-card text-slate-800 dark:text-slate-200 hover:text-maroon-600 dark:hover:text-maroon-300 flex items-center gap-2 border border-slate-300 dark:border-slate-800"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-maroon-600 dark:text-maroon-400" />
                <span>{profileData.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-maroon-600 dark:hover:text-maroon-400 transition-colors flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-maroon-600 dark:hover:text-maroon-400 transition-colors flex items-center gap-1"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column — Pen Portrait Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              
              {/* Top Floating Badge */}
              <div className="absolute -top-4 -right-2 z-20 px-3.5 py-1.5 rounded-xl bg-slate-950 dark:bg-slate-900 text-white border border-slate-800 dark:border-slate-700 shadow-xl backdrop-blur-md flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-maroon-400" />
                <div>
                  <span className="block text-[11px] font-mono text-slate-300 font-bold">99.9% Uptime Lead</span>
                </div>
              </div>

              {/* Portrait Container */}
              <div className="relative rounded-3xl p-3 glass-panel overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Bottom Legible Dark Mask Bar */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 text-white z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-bold text-base text-white tracking-wide">
                          Avin Saji
                        </h3>
                        <p className="text-xs text-slate-400 font-mono font-semibold">
                          SDE @ Kristu Jayanti SDC
                        </p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono font-medium">
                        Bengaluru, IN
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
