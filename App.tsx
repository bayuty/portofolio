import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Organization from './components/Organization';
import Contact from './components/Contact';
import AIChatWidget from './components/AIChatWidget';
import MouseSpotlight from './components/ui/MouseSpotlight';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white relative overflow-x-hidden">
      <MouseSpotlight />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Organization />
        <Contact />
      </main>
      <AIChatWidget />
    </div>
  );
}

export default App;