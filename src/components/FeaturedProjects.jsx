import React, { useState, useRef } from 'react';

/**
 * ProjectCard Component
 * Implements interactive 3D perspective tilt physics, cursor spotlight shine,
 * dark glass panel styling (border-emerald-500/20), and smooth hover lift (translateY(-6px)).
 */
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  );
  const [shine, setShine] = useState({ x: 0, y: 0, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (-9deg to +9deg)
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`
    );
    setShine({ x, y, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
    setShine((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? 'transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease, border-color 0.5s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-[#161b22]/70 backdrop-blur-xl border transition-all duration-300 ${
        isHovered
          ? 'border-emerald-400/60 shadow-[0_16px_36px_-6px_rgba(16,185,129,0.35),0_0_20px_1px_rgba(16,185,129,0.15)]'
          : 'border-emerald-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
      }`}
    >
      {/* Dynamic Cursor Spotlight / Shine Effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-10 overflow-hidden"
        style={{
          opacity: shine.opacity,
          background: `radial-gradient(350px circle at ${shine.x}px ${shine.y}px, rgba(16, 185, 129, 0.18), transparent 75%)`,
        }}
      />

      {/* Glossy Top Glass Edge Reflection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Card Header & Badges */}
      <div className="relative z-20 mb-5">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400/90 font-semibold">
              {project.categoryBadge}
            </span>
          </div>

          <span className="text-xs font-mono text-zinc-500/80 group-hover:text-emerald-400/80 transition-colors">
            // 0{index + 1}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-lime-300 transition-all duration-300 mb-2">
          {project.title}
        </h3>

        {/* System Sub-tag / Highlight Pill */}
        <div className="inline-block mb-3">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-medium">
            {project.subtitle}
          </span>
        </div>

        {/* 2-Sentence Project Description */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0d1117]/80 text-zinc-300 border border-emerald-500/15 group-hover:border-emerald-500/30 group-hover:text-zinc-200 transition-all"
            >
              <span className="w-1 h-1 rounded-full bg-lime-400" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons: 'Live Demo' & 'GitHub Code' */}
      <div className="relative z-20 pt-4 border-t border-emerald-500/15 flex items-center gap-3">
        {/* Live Demo Button */}
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#090d12] bg-gradient-to-r from-emerald-400 to-lime-300 hover:from-emerald-300 hover:to-lime-200 shadow-[0_0_12px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-95 transition-all duration-200"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span>Live Demo</span>
        </a>

        {/* GitHub Code Button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-zinc-300 bg-[#0d1117]/90 hover:bg-emerald-500/10 border border-emerald-500/25 hover:border-lime-400/80 hover:text-white transition-all duration-200 active:scale-95"
        >
          <svg
            className="w-3.5 h-3.5 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span>GitHub Code</span>
        </a>
      </div>
    </div>
  );
};

/**
 * FeaturedProjects Component
 * Responsive 3-column student projects grid with filter pills:
 * 'All', 'Web Apps', 'AI / ML', 'Mini-Projects'
 */
const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projectsData = [
    {
      id: 1,
      title: 'SkillsyncAI',
      subtitle: '[PORTFOLIO GENERATOR]',
      categoryBadge: 'AI & Web Architecture',
      categories: ['All', 'Web Apps', 'AI / ML'],
      description:
        'An intelligent AI-powered platform that parses developer resumes and GitHub repositories to auto-generate bespoke, high-converting portfolios with live previews in seconds. It bridges the showcase gap by automating dynamic skill-tagging, project metrics, and one-click cloud deployment.',
      technologies: ['React', 'Firebase', 'Gemini AI', 'Tailwind CSS'],
      liveDemoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'AIR MODELLING',
      subtitle: '[DRONE]',
      categoryBadge: 'Computer Vision & Robotics',
      categories: ['All', 'AI / ML', 'Mini-Projects'],
      description:
        'An advanced aerial modeling and flight telemetry suite engineered for autonomous UAV target tracking, obstacle avoidance, and real-time waypoint trajectory simulation. Solves aerial inspection latency by executing low-latency edge computer vision with lightweight neural models directly on flight controllers.',
      technologies: ['Python', 'OpenCV', 'YOLOv8', 'ROS / DroneKit'],
      liveDemoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'CampusPulse',
      subtitle: '[STUDENT ACADEMIC ECOSYSTEM]',
      categoryBadge: 'Full-Stack Platform',
      categories: ['All', 'Web Apps', 'Mini-Projects'],
      description:
        'A unified collaboration and academic workflow hub designed for KSIT engineering students to share peer-reviewed study resources, coordinate hackathon teams, and track lab schedules. Streamlines campus communications with real-time websocket announcements and automated attendance analytics.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      liveDemoUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = projectsData.filter((p) =>
    activeFilter === 'All' ? true : p.categories.includes(activeFilter)
  );

  return (
    <section
      id="projects"
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/15"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
          <span>FEATURED SHOWCASE // CSE PORTFOLIO</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
          Engineered to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            Solve Real-World Challenges
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Interactive cards crafted with dark glassmorphism, 3D perspective physics, and live cursor illumination. Hover and tilt to explore.
        </p>

        {/* Filter Pill Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#161b22]/80 border border-emerald-500/20 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-carbon-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'text-zinc-400 hover:text-white hover:bg-emerald-500/10'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 -z-0" />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab}
                  {tab === 'All' ? (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-carbon-900/30 text-carbon-950'
                          : 'bg-emerald-500/10 text-emerald-400'
                      }`}
                    >
                      3
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      {/* Grid Bottom Info / GitHub Link */}
      <div className="mt-14 flex items-center justify-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono text-zinc-400 hover:text-emerald-300 bg-[#161b22]/50 hover:bg-[#161b22] border border-emerald-500/20 hover:border-emerald-400 transition-all duration-300 group"
        >
          <span>More projects and experimental repositories on GitHub</span>
          <svg
            className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;

