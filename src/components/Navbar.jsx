import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Floating frosted-glass navbar fixed at the top of the viewport.
 * Features:
 * - Frosted blur glass with emerald accent border
 * - Brand logo with pulsing cyber bracket indicator
 * - Clean navigation links with smooth hover animations
 * - Mobile responsive drawer toggle
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('About');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-6xl mx-auto">
        <nav
          className={`relative flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] shadow-emerald-950/20'
              : 'bg-[#0d1117]/60 backdrop-blur-md border border-emerald-500/15 shadow-[0_4px_24px_0_rgba(0,0,0,0.3)]'
          }`}
        >
          {/* Brand / Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Amulya G Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-carbon-800 border border-emerald-500/30 group-hover:border-emerald-400 transition-colors duration-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
              <span className="font-mono font-bold text-xs text-emerald-400 group-hover:text-lime-300 transition-colors">
                AG
              </span>
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-zinc-100 group-hover:text-emerald-300 transition-colors">
                Amulya G<span className="text-emerald-400">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-emerald-500/80 -mt-1 uppercase">
                CSE // DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? 'text-emerald-300 font-semibold bg-emerald-500/10'
                      : 'text-zinc-300 hover:text-white hover:bg-emerald-500/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
                    )}
                    {link.name}
                  </span>
                  {/* Subtle hover neon underline */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-xl text-xs font-mono font-semibold tracking-wide text-emerald-400 bg-carbon-800/80 border border-emerald-500/30 hover:border-lime-400 hover:text-lime-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 active:scale-95"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="relative p-2 rounded-xl text-zinc-400 hover:text-white bg-carbon-800/80 border border-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-5 h-5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu with Frosted Glass */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#0d1117]/95 backdrop-blur-2xl border border-emerald-500/30 shadow-[0_12px_36px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeLink === link.name
                      ? 'text-emerald-300 bg-emerald-500/10 font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <svg
                    className="w-4 h-4 text-emerald-400/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
              <div className="pt-2 border-t border-emerald-500/15 mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-mono font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/40 hover:bg-emerald-500/25 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

