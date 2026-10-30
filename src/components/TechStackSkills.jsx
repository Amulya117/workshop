import React, { useState } from 'react';

/**
 * SkillBadge Component
 * Interactive pill badge featuring official tech icon, hover scale-105,
 * glowing emerald border, and an animated floating tooltip displaying comfort level.
 */
const SkillBadge = ({ name, icon, level, levelType }) => {
  // Level badge color accents
  const getLevelBadgeStyles = (type) => {
    switch (type) {
      case 'Proficient':
        return {
          pill: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          dot: 'bg-emerald-400 shadow-[0_0_8px_#10b981]',
          tooltipGradient: 'from-emerald-400 to-teal-300',
        };
      case 'Familiar':
        return {
          pill: 'bg-lime-500/15 text-lime-300 border-lime-500/30',
          dot: 'bg-lime-400 shadow-[0_0_8px_#a3e635]',
          tooltipGradient: 'from-lime-400 to-emerald-300',
        };
      case 'Currently Learning':
      default:
        return {
          pill: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          dot: 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]',
          tooltipGradient: 'from-teal-300 to-cyan-300',
        };
    }
  };

  const style = getLevelBadgeStyles(levelType);

  return (
    <div className="relative group/skill flex items-center">
      {/* Floating Animated Comfort Level Tooltip */}
      <div className="absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 group-hover/skill:-translate-y-1 pointer-events-none transition-all duration-200 z-30 whitespace-nowrap">
        <div
          className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold text-carbon-950 bg-gradient-to-r ${style.tooltipGradient} shadow-[0_0_16px_rgba(16,185,129,0.4)] flex items-center gap-1.5`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-carbon-950" />
          <span>{level}</span>
        </div>
        {/* Tiny Tooltip Arrow */}
        <div className="w-2 h-2 bg-emerald-400 rotate-45 mx-auto -mt-1 shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
      </div>

      {/* Sleek Interactive Badge */}
      <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#161b22]/80 hover:bg-[#161b22] border border-emerald-500/20 hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-105 transition-all duration-200 cursor-pointer backdrop-blur-sm">
        {/* Official Tech Icon Container */}
        <div className="w-5 h-5 flex items-center justify-center shrink-0 text-zinc-300 group-hover/skill:text-emerald-300 transition-colors">
          {icon}
        </div>

        {/* Skill Name */}
        <span className="text-xs sm:text-sm font-mono font-medium text-zinc-200 group-hover/skill:text-white transition-colors">
          {name}
        </span>

        {/* Subtle Indicator Dot */}
        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      </div>
    </div>
  );
};

/**
 * TechStackSkills Component
 * Displays 3 categorized panels: 'Languages', 'Frameworks & Tools', 'Core CS Concepts'.
 */
const TechStackSkills = () => {
  const [filterLevel, setFilterLevel] = useState('All');

  // Categories and skills data with official SVGs
  const categories = [
    {
      title: 'Languages',
      subtitle: 'Core programming syntax & compiled runtimes',
      badge: '01 // SYNTAX',
      skills: [
        {
          name: 'C++',
          level: 'Proficient',
          levelType: 'Proficient',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.394 6.002L13.606.927a3.21 3.21 0 00-3.212 0L1.606 6.002A3.21 3.21 0 000 8.783v10.15a3.21 3.21 0 001.606 2.781l8.788 5.075c.993.573 2.22.573 3.212 0l8.788-5.075a3.21 3.21 0 001.606-2.781V8.783a3.21 3.21 0 00-1.606-2.781zM10.875 16.5l-3.375-1.95v-3.9l3.375-1.95 2.025 1.17-1.05 1.83-1.05-.6-1.575.9v1.95l1.575.9 1.05-.6 1.05 1.83-2.025 1.17zm6.75-3.375h-1.125V12h1.125v-1.125h1.125V12h1.125v1.125h-1.125v1.125H17.625v-1.125zm3.75 0h-1.125V12h1.125v-1.125h1.125V12h1.125v1.125h-1.125v1.125h-1.125v-1.125z" />
            </svg>
          ),
        },
        {
          name: 'Python',
          level: 'Proficient',
          levelType: 'Proficient',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.808v.825H3.92S0 5.78 0 11.92c0 6.14 3.42 5.918 3.42 5.918h2.04v-2.868s-.11-3.42 3.364-3.42h5.782v-.85s.504-3.39-3.792-3.39H4.998s-.36-2.975 4.316-2.975h3.048S17.84 4.887 17.84 1.77C17.84-1.345 11.914 0 11.914 0zM8.74 1.706a.936.936 0 11.002 1.873.936.936 0 01-.002-1.873zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752H11.986v-.825h8.094s3.92.453 3.92-5.687c0-6.14-3.42-5.918-3.42-5.918h-2.04v2.868s.11 3.42-3.364 3.42H9.394v.85s-.504 3.39 3.792 3.39h5.816s.36 2.975-4.316 2.975h-3.048S6.16 19.113 6.16 22.23C6.16 25.345 12.086 24 12.086 24zm3.174-1.706a.936.936 0 11-.002-1.873.936.936 0 01.002 1.873z" />
            </svg>
          ),
        },
        {
          name: 'JavaScript',
          level: 'Proficient',
          levelType: 'Proficient',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.62-1.797-.828-.277-.207-.38-.415-.38-.69 0-.415.346-.725.968-.725.656 0 1.07.242 1.485.69.24.276.483.415.794.415.483 0 .863-.38.863-.863 0-.38-.172-.69-.517-1.035-.794-.794-2.002-1.173-3.21-1.173-2.002 0-3.383 1.139-3.383 2.899 0 1.208.621 2.07 2.14 2.726 1.173.518 1.691.829 1.933 1.07.242.242.346.553.346.932 0 .587-.518 1.036-1.381 1.036-1.036 0-1.623-.483-2.002-1.173-.207-.38-.484-.553-.863-.553-.484 0-.863.38-.863.863 0 .31.138.621.414.932.966 1.208 2.347 1.76 4.073 1.76 2.381 0 3.865-1.277 3.865-3.141v-.001zm-9.043.207c0-1.553-.863-2.347-2.485-2.347-.38 0-.828.069-1.242.172v-3.796c0-.484-.38-.863-.863-.863-.483 0-.863.38-.863.863v5.177c0 2.278 1.38 3.313 3.382 3.313.414 0 .829-.069 1.243-.172.518-.138.828-.518.828-.98v-1.367h-.001z" />
            </svg>
          ),
        },
        {
          name: 'Java',
          level: 'Familiar',
          levelType: 'Familiar',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.64-5.495 2.22-11.23-.408-6.943-1.143zm-1.034-2.833s-1.077.738.513.972c2.062.304 3.754.279 6.745-.333 0 0 .399.378.98.63-6.529 1.956-12.923-.393-8.238-1.269zm8.567-4.148c.516 1.488-.133 2.766-.133 2.766s1.611-.844.89-2.887c-.66-1.872-2.368-2.67-2.368-2.67s1.171 1.229 1.611 2.791zm-4.707-8.816s3.08 3.08-2.49 7.411c-4.42 3.438-1.01 5.371-.05 5.511-3.62-.91-4.78-3.55-2.92-5.71 2.25-2.62 4.41-3.9 5.46-7.212zm7.04 11.218c.84 2.11-1.07 3.51-1.07 3.51s.88-.47 1.2-1.39c.63-1.8-1.37-3.41-.13-2.12zm-3.39-4.81s2.21 2.21-.92 5.58c-2.48 2.67-1.12 3.86-.34 4.09-2.58-.67-3.23-2.61-1.92-4.22 1.6-1.97 3.09-2.73 3.18-5.45z" />
            </svg>
          ),
        },
        {
          name: 'TypeScript',
          level: 'Familiar',
          levelType: 'Familiar',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM12 4.5h8.25v2.25H16.5v12.75H13.5V6.75H12V4.5zm-5.25 4.5c1.864 0 3.375 1.511 3.375 3.375 0 2.25-1.875 3-3.375 3.375V19.5H3.75v-2.25h1.5v-6.75h-1.5V9h3zm0 2.25h-.75v2.25h.75c.621 0 1.125-.504 1.125-1.125S7.371 11.25 6.75 11.25z" />
            </svg>
          ),
        },
        {
          name: 'SQL',
          level: 'Proficient',
          levelType: 'Proficient',
          icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Frameworks & Tools',
      subtitle: 'Modern UI engines, runtime platforms & developer tooling',
      badge: '02 // ARCHITECTURE',
      skills: [
        {
          name: 'React 18',
          level: 'Proficient',
          levelType: 'Proficient',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm7.42-3.834c-.81 1.83-2.19 3.21-4.02 4.02-1.83.81-3.97.81-5.8 0-1.83-.81-3.21-2.19-4.02-4.02-.81-1.83-.81-3.97 0-5.8.81-1.83 2.19-3.21 4.02-4.02 1.83-.81 3.97-.81 5.8 0 1.83.81 3.21 2.19 4.02 4.02.81 1.83.81 3.97 0 5.8z" />
            </svg>
          ),
        },
        {
          name: 'Tailwind CSS',
          level: 'Proficient',
          levelType: 'Proficient',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
          ),
        },
        {
          name: 'Node.js',
          level: 'Familiar',
          levelType: 'Familiar',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-.01 2.298l8.39 4.842v9.72l-8.39 4.842-8.39-4.842v-9.72l8.39-4.842zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
            </svg>
          ),
        },
        {
          name: 'Git & GitHub',
          level: 'Proficient',
          levelType: 'Proficient',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          ),
        },
        {
          name: 'Firebase',
          level: 'Familiar',
          levelType: 'Familiar',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.283l3.543 6.643-6.923 8.746zm16.79-3.327l-2.073-3.92-1.93-3.654a.543.543 0 00-.974.038l-2.32 4.417 7.297 3.119zM4.62 17.065l7.025 3.948a.747.747 0 00.71 0l7.025-3.948-3.08-6.853L4.62 17.065z" />
            </svg>
          ),
        },
        {
          name: 'Docker',
          level: 'Currently Learning',
          levelType: 'Currently Learning',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0-2.715h2.119a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.928 2.715H7.29a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.172a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185" />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Core CS Concepts',
      subtitle: 'Foundational computer science principles & system abstractions',
      badge: '03 // FOUNDATIONS',
      skills: [
        {
          name: 'Data Structures & Algorithms',
          level: 'Proficient',
          levelType: 'Proficient',
          icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
        {
          name: 'Object-Oriented Programming (OOP)',
          level: 'Proficient',
          levelType: 'Proficient',
          icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
        },
        {
          name: 'Database Management (DBMS)',
          level: 'Proficient',
          levelType: 'Proficient',
          icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
        },
        {
          name: 'Operating Systems (OS)',
          level: 'Familiar',
          levelType: 'Familiar',
          icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          name: 'Computer Networks',
          level: 'Familiar',
          levelType: 'Familiar',
          icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          ),
        },
        {
          name: 'System Design',
          level: 'Currently Learning',
          levelType: 'Currently Learning',
          icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/15"
    >
      {/* Background ambient neon glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
          <span>TECHNICAL ARSENAL // CS ENGINE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
          Tech Stack &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            Core Competencies
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-6">
          Hover over any badge to inspect proficiency metrics and comfort levels. Built with solid algorithmic foundations and production-grade tools.
        </p>

        {/* Comfort Level Legend Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 px-4 py-2 rounded-xl bg-[#161b22]/60 border border-emerald-500/15 text-xs font-mono text-zinc-300">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            <span>Proficient</span>
          </div>
          <span className="text-emerald-500/30">•</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]" />
            <span>Familiar</span>
          </div>
          <span className="text-emerald-500/30">•</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
            <span>Currently Learning</span>
          </div>
        </div>
      </div>

      {/* 3 Tidy Category Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#161b22]/70 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_12px_32px_-6px_rgba(16,185,129,0.25)] transition-all duration-300"
          >
            {/* Top Gloss Edge */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400 font-semibold">
                  {cat.badge}
                </span>
                <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
              </div>

              <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-1">
                {cat.title}
              </h3>

              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                {cat.subtitle}
              </p>

              {/* Badges Container */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                    levelType={skill.levelType}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Cyber Deco Line */}
            <div className="mt-8 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>VERIFIED // CSE SYLLABUS</span>
              <span className="text-emerald-500/70">{cat.skills.length} competencies</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSkills;

