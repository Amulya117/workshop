import React from 'react';

/**
 * Footer Component
 * Clean, modern footer featuring the exact requested sign-off:
 * "Designed & Engineered by Amulya G Class of 2029"
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 border-t border-emerald-500/15 bg-[#0d1117]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Brand Monogram Icon */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-[#161b22] border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            AG
          </div>
          <span className="text-sm font-semibold text-zinc-200">Amulya G</span>
        </div>

        {/* Required Centered Line */}
        <p className="text-sm sm:text-base font-medium text-zinc-300 tracking-wide mb-2">
          Designed & Engineered by{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 font-semibold drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            Amulya G
          </span>{' '}
          <span className="text-emerald-400/80 font-mono text-xs sm:text-sm">Class of 2029</span>
        </p>

        {/* College & Department Subtitle */}
        <p className="text-xs font-mono text-zinc-500 mb-6">
          KS Institute of Technology • Computer Science & Engineering
        </p>

        {/* Navigation Shortcut & Return to top */}
        <div className="flex items-center gap-6 text-xs font-mono text-zinc-400 mb-6">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
          <a href="#campus" className="hover:text-emerald-400 transition-colors">Campus Life</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>

        {/* Return to Top Button */}
        <button
          onClick={scrollToTop}
          type="button"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono text-emerald-400 bg-[#161b22] border border-emerald-500/20 hover:border-emerald-400 hover:text-white transition-all duration-200 group cursor-pointer shadow-sm"
        >
          <span>Back to Top</span>
          <svg className="w-3.5 h-3.5 text-emerald-400 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Copyright */}
        <div className="mt-8 text-[11px] font-mono text-zinc-600">
          © {new Date().getFullYear()} All rights reserved • Cyber-Emerald Dark Mode System
        </div>
      </div>
    </footer>
  );
};

export default Footer;

