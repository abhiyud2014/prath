import { useState } from 'react';
import { useParticleCanvas } from './hooks/useParticleCanvas';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Infographic from './components/Infographic';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Metrics from './components/Metrics';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const canvasRef = useParticleCanvas(theme);
  useScrollReveal();

  // Apply theme to <html> so body CSS vars resolve correctly
  document.documentElement.setAttribute('data-theme', theme);

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="pc"
        style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}
      />
      <div className="grid-bg" />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Infographic theme={theme} />
      <div className="sd" />
      <Experience />
      <div className="sd" />
      <Skills />
      <div className="sd" />
      <Projects />
      <Metrics />
      <div className="sd" />
      <Education />
      <div className="sd" />
      <Contact />
      <Footer />
    </div>
  );
}
