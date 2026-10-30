import React, { useState, useRef } from 'react';

/**
 * MagneticLink Component
 * Creates an interactive magnetic attraction physics effect on hover.
 */
const MagneticLink = ({ href, icon, label, subtext, isExternal = true }) => {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.32;
    const deltaY = (e.clientY - centerY) * 0.32;
    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 ? 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.1s ease-out',
        willChange: 'transform',
      }}
      className="group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#161b22]/80 hover:bg-[#161b22] border border-emerald-500/20 hover:border-emerald-400/80 hover:shadow-[0_0_24px_rgba(16,185,129,0.3)] transition-colors duration-200"
    >
      <div className="w-10 h-10 rounded-xl bg-[#0d1117] border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 group-hover:border-lime-400/80 transition-colors shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors truncate">
          {label}
        </span>
        <span className="text-[11px] font-mono text-zinc-400 group-hover:text-emerald-400/90 transition-colors truncate">
          {subtext}
        </span>
      </div>
      <div className="ml-auto text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </a>
  );
};

/**
 * ContactSection Component
 * Student-friendly contact card with interactive form, simulated feedback animation,
 * and magnetic hover icon links.
 */
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitState, setSubmitState] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setSubmitState('loading');

    setTimeout(() => {
      setSubmitState('success');
      setTimeout(() => {
        setSubmitState('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-emerald-500/15"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          <span>CONTACT & COLLABORATION // INBOX OPEN</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
          Let’s{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            Collaborate & Build
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
          Open for summer internships, open-source projects, or tech chats. Drop me a message!
        </p>
      </div>

      {/* Main Glass Card: Form + Direct Links */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Links & Bio Pill (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#161b22]/70 backdrop-blur-xl border border-emerald-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>DIRECT CHANNELS</span>
            </div>

            <h3 className="text-xl font-bold text-zinc-100 mb-2">
              Get In Touch Directly
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
              Prefer direct emails or networking via GitHub and LinkedIn? Reach out anytime with one click below.
            </p>

            {/* Magnetic Links Stack */}
            <div className="space-y-3">
              {/* Email */}
              <MagneticLink
                href="mailto:amulya11g@gmail.com"
                isExternal={false}
                label="Email Me Directly"
                subtext="amulya11g@gmail.com"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />

              {/* GitHub */}
              <MagneticLink
                href="https://github.com"
                label="GitHub Profile"
                subtext="@amulya-g // Repositories"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                }
              />

              {/* LinkedIn */}
              <MagneticLink
                href="https://linkedin.com"
                label="LinkedIn Network"
                subtext="Amulya G // Connections"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Location Badge */}
          <div className="mt-8 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Bangalore, India</span>
            </span>
            <span className="text-emerald-500/70">IST (UTC+5:30)</span>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#161b22]/70 backdrop-blur-xl border border-emerald-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Taylor"
                className="w-full px-4 py-3 rounded-xl bg-[#0d1117]/90 border border-emerald-500/20 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all font-sans text-sm"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider mb-2">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@domain.com"
                className="w-full px-4 py-3 rounded-xl bg-[#0d1117]/90 border border-emerald-500/20 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all font-sans text-sm"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Hey Amulya, saw your portfolio and would love to chat about a summer internship / project collaboration..."
                className="w-full px-4 py-3 rounded-xl bg-[#0d1117]/90 border border-emerald-500/20 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all font-sans text-sm resize-none"
              />
            </div>

            {/* Animated Feedback Submit Button */}
            <button
              type="submit"
              disabled={submitState !== 'idle'}
              className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg ${
                submitState === 'success'
                  ? 'bg-gradient-to-r from-emerald-500 to-lime-400 text-carbon-950 shadow-[0_0_25px_rgba(16,185,129,0.5)]'
                  : submitState === 'loading'
                  ? 'bg-[#161b22] text-emerald-400 border border-emerald-500/40 cursor-wait'
                  : 'bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 text-carbon-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 active:translate-y-0'
              }`}
            >
              {submitState === 'loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Transmitting Payload...</span>
                </>
              ) : submitState === 'success' ? (
                <>
                  <svg className="w-4 h-4 text-carbon-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message Sent! 🚀</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Quick status guarantee note */}
          <p className="mt-4 text-center text-[11px] font-mono text-zinc-500">
            Guaranteed response within 24 hours • No spam guaranteed
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

