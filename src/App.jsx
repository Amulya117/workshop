import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStackSkills from './components/TechStackSkills';
import CampusJourney from './components/CampusJourney';
import MatrixGridCanvas from './components/MatrixGridCanvas';

function App() {
  return (
    <div className="relative min-h-screen bg-carbon-900 text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 overflow-x-hidden">
      {/* Interactive Matrix Dot Grid Background Effect */}
      <MatrixGridCanvas />

      {/* Floating Frosted Glass Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Intro Hero Screen */}
        <Hero />

        {/* Featured Projects Showcase with 3D Physics Cards & Filter Pills */}
        <FeaturedProjects />

        {/* Interactive Tech Stack & Skills Section */}
        <TechStackSkills />

        {/* Education & Campus Journey Section */}
        <CampusJourney />

        {/* Footer */}
        <footer className="py-8 border-t border-emerald-500/10 text-center text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Amulya G — Designed & Built with React & Tailwind CSS.</p>
          <p className="mt-1 text-emerald-500/70">KS INSTITUTE OF TECHNOLOGY (CSE)</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
