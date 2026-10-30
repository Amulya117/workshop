import React from 'react';

/**
 * Hero Component
 * Opening screen for student developer portfolio.
 * Cyber-Emerald / Dark Mode theme (#0d1117 background + #10b981 emerald + #a3e635 lime).
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Ambient background soft neon gradients (No blue gradients) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[250px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* 1. Animated Radar Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-carbon-800/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-400/60 transition-all duration-300 group cursor-default mb-8">
          {/* Radar Ring Ping */}
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#10b981]" />
          </div>

          <span className="text-xs sm:text-sm font-mono font-medium text-emerald-300 tracking-wide">
            Student Developer <span className="text-emerald-500/60">//</span>{' '}
            <span className="text-lime-400 font-semibold group-hover:text-lime-300">
              Open for Internships
            </span>
          </span>

          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
          <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400">
            Available 2026
          </span>
        </div>

        {/* 2. Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-100 tracking-tight leading-[1.12] mb-6">
          Hey, I am{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
            Amulya G
          </span>
          <br className="hidden sm:block" />
          <span className="block mt-2 sm:mt-1 text-zinc-200">
            — Building the{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                Future of Tech
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500/80 via-lime-400 to-transparent rounded-full" />
            </span>
            .
          </span>
        </h1>

        {/* 3. Student Bio & Institution Highlight */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-4">
            <svg
              className="w-3.5 h-3.5 text-lime-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
            <span>KS INSTITUTE OF TECHNOLOGY (CSE)</span>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Passionate about{' '}
            <span className="text-emerald-300 font-medium">web development</span>,{' '}
            <span className="text-lime-300 font-medium">artificial intelligence</span>, and architecting{' '}
            <span className="text-zinc-100 font-semibold underline decoration-emerald-500/50 underline-offset-4">
              real-world projects
            </span>{' '}
            that bridge engineering excellence with human-centric design.
          </p>
        </div>

        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          {/* Primary Button: Glowing Emerald with hover lift */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-carbon-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 shadow-neon-emerald hover:shadow-neon-emerald-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group cursor-pointer"
          >
            <span>View My Projects</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>

          {/* Secondary Button: Cyber Outline Button */}
          <a
            href="#resume"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-zinc-200 bg-carbon-800/60 hover:bg-emerald-500/10 border border-emerald-500/30 hover:border-lime-400 hover:text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 active:translate-y-0 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] group cursor-pointer"
          >
            <svg
              className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Download Resume / CV</span>
          </a>
        </div>

        {/* 5. Cyber Tech Stack & Live Interactive Terminal Pill */}
        <div className="w-full max-w-2xl bg-carbon-900/80 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 ml-2">amulya@ksit: ~/portfolio</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              STATUS: ONLINE
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
            {[
              { name: 'React 18', tag: 'UI/UX' },
              { name: 'Tailwind CSS', tag: 'Styling' },
              { name: 'JavaScript / TS', tag: 'Core' },
              { name: 'Python / AI', tag: 'Models' },
              { name: 'Node.js', tag: 'Backend' },
              { name: 'Git & Linux', tag: 'DevOps' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-carbon-800/90 border border-emerald-500/20 hover:border-emerald-400 text-zinc-300 hover:text-white transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                <span className="text-zinc-200 font-medium">{skill.name}</span>
                <span className="text-[10px] text-emerald-500/70">{skill.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors">
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500/60">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-emerald-500/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-emerald-400 animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

