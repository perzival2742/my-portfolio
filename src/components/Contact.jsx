import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState })
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        alert('Submission error: ' + error);
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-100/60 dark:bg-[#0c0e15]/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-600/10 text-maroon-700 dark:text-maroon-300 text-xs font-mono font-medium border border-maroon-500/20">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Let's Build Something Scalable
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Open for full-time software engineering roles, microservice consultations, and backend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column — Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-maroon-500" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-maroon-500/40 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-maroon-600/10 text-maroon-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">Email Address</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-maroon-500 transition-colors">
                      {profileData.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-maroon-500/40 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">Phone Number</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-maroon-500 transition-colors">
                      {profileData.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                  <div className="w-12 h-12 rounded-xl bg-maroon-600/10 text-maroon-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">Current Location</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {profileData.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-maroon-900/30 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Profiles:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-200 dark:bg-maroon-950/60 text-slate-700 dark:text-maroon-200 hover:text-maroon-500 hover:scale-105 transition-all"
                    title="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-200 dark:bg-maroon-950/60 text-slate-700 dark:text-maroon-200 hover:text-maroon-500 hover:scale-105 transition-all"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column — Netlify Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-maroon-600/30 relative">
              
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-xs font-mono text-maroon-700 dark:text-maroon-400 mb-6 font-semibold">
                Powered by Netlify Forms · Directly reaches my inbox
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-maroon-600/10 border border-maroon-500/30 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-maroon-500 mx-auto" />
                  <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    Thank You! Message Delivered.
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    I have received your note and will get back to you shortly at your email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-mono bg-maroon-700 text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-[#12151e]/80 border border-slate-300 dark:border-maroon-600/25 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-maroon-500 focus:ring-1 focus:ring-maroon-500 transition-all text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-[#12151e]/80 border border-slate-300 dark:border-maroon-600/25 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-maroon-500 focus:ring-1 focus:ring-maroon-500 transition-all text-sm"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project or job opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-[#12151e]/80 border border-slate-300 dark:border-maroon-600/25 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-maroon-500 focus:ring-1 focus:ring-maroon-500 transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-maroon-700 hover:bg-maroon-600 text-white font-medium text-sm shadow-lg shadow-maroon-950/40 hover:shadow-maroon-900/60 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
