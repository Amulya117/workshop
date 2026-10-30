import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStackSkills from './components/TechStackSkills';
import CampusJourney from './components/CampusJourney';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MatrixGridCanvas from './components/MatrixGridCanvas';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="relative min-h-screen bg-carbon-900 text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 overflow-x-hidden">
      {/* Subtle Trailing Light Spark (Easter Egg Cursor Follower) */}
      <CursorGlow />

      {/* Interactive Matrix Dot Grid Background Effect */}
      <MatrixGridCanvas />

      {/* Floating Frosted Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Intro Hero Screen */}
        <Hero />

        {/* Featured Projects Showcase with 3D Physics Cards & Filter Pills */}
        <FeaturedProjects />

        {/* Interactive Tech Stack & Skills Section */}
        <TechStackSkills />

        {/* Education & Campus Journey Section */}
        <CampusJourney />

        {/* Student-Friendly Contact Card with Magnetic Links */}
        <ContactSection />
      </main>

      {/* Clean Modern Footer */}
      <Footer />
    </div>
  );
}

export default App;
