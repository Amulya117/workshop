import React from 'react';

/**
 * CampusJourney Component
 * Highlights student background, college journey at KSIT,
 * interactive vertical milestone timeline, and a 2x2 achievement callout grid.
 */
const CampusJourney = () => {
  const milestones = [
    {
      year: '2026',
      title: '3RD SEM BTECH SIH WINNER',
      tag: 'COMPETITIVE HACKATHON',
      note: 'Clinched victory in Smart India Hackathon (SIH) internal collegiate rounds during 3rd semester CSE, engineering high-impact real-world solutions under tight deadlines.',
      status: 'Current Milestone',
      isCurrent: true,
    },
    {
      year: '2025',
      title: 'NXGEN CLUB MEMBER',
      tag: 'CAMPUS LEADERSHIP',
      note: 'Joined the core technical wing of NxGen Club at KSIT, actively facilitating hands-on coding bootcamps, peer mentoring, and campus tech symposiums.',
      status: 'Core Contributor',
      isCurrent: false,
    },
    {
      year: '2024',
      title: 'SKILLSYNC AI',
      tag: 'PROJECT INCEPTION',
      note: 'Architected and launched SkillSync AI, an automated developer showcase engine bridging student portfolios with production-ready cloud deployment.',
      status: 'Platform Launch',
      isCurrent: false,
    },
  ];

  const achievements = [
    {
      icon: '🏆',
      title: '1st Place - University Hackathon',
      subtitle: 'Smart India Hackathon (SIH) Winner // 3rd Sem CSE',
      highlight: 'Collegiate Winner',
      glow: 'emerald',
    },
    {
      icon: '⚡',
      title: '150+ LeetCode Problems Solved',
      subtitle: 'Consistent DSA problem solving in C++ & Python',
      highlight: 'Top Tier Streak',
      glow: 'lime',
    },
    {
      icon: '👥',
      title: 'Tech Club Organizer',
      subtitle: 'Core member at NxGen Club driving tech events & workshops',
      highlight: 'Community Lead',
      glow: 'emerald',
    },
    {
      icon: '📜',
      title: 'Full-Stack Certified',
      subtitle: 'Modern web engineering with React, APIs & cloud services',
      highlight: 'Verified Credential',
      glow: 'cyan',
    },
  ];

  return (
    <section
      id="campus"
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/15"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
          <span>CAMPUS JOURNEY // KSIT CSE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
          Education &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            Student Milestones
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          From competitive hackathons to campus leadership at KS Institute of Technology. A timeline of continuous growth and technical contributions.
        </p>
      </div>

      {/* Split Grid: Left Timeline + Right Achievement Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Interactive Milestone Timeline (7 cols) */}
        <div className="lg:col-span-7 relative">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-emerald-500/15">
            <span className="text-xs font-mono tracking-wider text-emerald-400 uppercase font-semibold">
              // CHRONOLOGICAL TIMELINE
            </span>
            <span className="text-xs font-mono text-zinc-500">2024 — 2026+</span>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 space-y-10">
            {/* Continuous Illuminated Emerald Line */}
            <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/60 to-lime-400/20 shadow-[0_0_8px_#10b981]" />

            {milestones.map((item, idx) => (
              <div key={item.year} className="relative group">
                {/* Glowing Nodal Dot */}
                <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 flex items-center justify-center">
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    {item.isCurrent && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                    )}
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0d1117] border-2 border-emerald-400 shadow-[0_0_10px_#10b981]" />
                  </span>
                </div>

                {/* Milestone Card */}
                <div className="rounded-2xl p-5 sm:p-6 bg-[#161b22]/70 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(16,185,129,0.25)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold text-carbon-950 bg-gradient-to-r from-emerald-400 to-lime-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                        {item.year}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/90 font-medium">
                        {item.tag}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-zinc-400 bg-carbon-800/80 px-2 py-0.5 rounded border border-emerald-500/15">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 2x2 Achievement Callouts (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-emerald-500/15">
            <span className="text-xs font-mono tracking-wider text-emerald-400 uppercase font-semibold">
              // KEY ACCOMPLISHMENTS
            </span>
            <span className="text-xs font-mono text-zinc-500">4 Callouts</span>
          </div>

          {/* 2x2 Grid of Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((badge, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-5 rounded-2xl bg-[#161b22]/70 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/70 hover:shadow-[0_0_24px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Top Subtle Gloss */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent rounded-t-2xl opacity-40 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{badge.icon}</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {badge.highlight}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-1.5 leading-snug">
                    {badge.title}
                  </h4>

                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {badge.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-500/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500">KSIT // CSE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 group-hover:animate-ping" />
                </div>
              </div>
            ))}
          </div>

          {/* College Info Card Callout */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-carbon-800/80 border border-emerald-500/20 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-carbon-800 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h5 className="text-sm font-bold text-zinc-100">KS Institute of Technology</h5>
              <p className="text-xs text-zinc-400 font-mono">B.Tech in Computer Science & Engineering • Bangalore</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CampusJourney;

