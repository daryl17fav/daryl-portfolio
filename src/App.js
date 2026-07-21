import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import InteractiveGridBackground from './components/ui/InteractiveGridBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505]">
      {/* ── Global animated grid canvas (fixed, full-page, z-0) ── */}
      <InteractiveGridBackground />

      {/* ── All content sits above the canvas (z-10+) ── */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
