import React from 'react';
import { profileData } from '../data/portfolioData';
import { GraduationCap, Award, Building2, CheckCircle2, BadgeCheck } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-100/60 dark:bg-[#0c0e15]/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-600/10 text-maroon-700 dark:text-maroon-300 text-xs font-mono font-medium border border-maroon-500/20">
            <span>ACADEMICS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Academic Qualifications & Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Academic distinction in Computer Applications & Commerce, NPTEL AI Certification, and industry virtual programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Degrees & Certifications Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Academic Degrees First */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-maroon-600 dark:text-maroon-400" />
                <span>Academic Degrees</span>
              </h3>

              <div className="space-y-4">
                {profileData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-maroon-600/20 hover:border-maroon-500/40 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-maroon-700 dark:text-maroon-300 font-semibold px-2.5 py-0.5 rounded bg-maroon-600/10 border border-maroon-500/20">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                        {edu.grade}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Standard NPTEL Certification (Placed below degrees) */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <BadgeCheck className="w-5 h-5 text-maroon-600 dark:text-maroon-400" />
                <span>Certifications</span>
              </h3>

              {profileData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-maroon-600/25 hover:border-maroon-500/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-maroon-700 dark:text-maroon-300 font-semibold">
                      Online Certification
                    </span>
                    <BadgeCheck className="w-5 h-5 text-maroon-500" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-maroon-700 dark:text-maroon-400 mb-2 font-semibold">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {cert.details}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Virtual Industry Experiences Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Virtual Engineering Programs</span>
            </h3>

            <div className="space-y-4">
              {profileData.virtualExperience.map((ve, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-maroon-600/20 hover:border-amber-500/40 transition-all"
                >
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-mono text-xs font-semibold mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>{ve.organization}</span>
                  </div>

                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-3">
                    {ve.program}
                  </h4>

                  <div className="space-y-1.5">
                    {ve.skills.map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-maroon-600 dark:text-maroon-400 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
