import { useState, useEffect } from 'react';
import config from './data/config';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Writing from './components/Writing';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    <div className="max-w-[640px] mx-auto px-6 min-h-screen flex flex-col">
      <Header name={config.name} dark={dark} toggle={toggle} />
      <main className="flex-1">
        <Hero config={config} />
        <Divider delay={3} />
        <Projects items={config.projects} />
        <Divider delay={4} />
        <Experience items={config.experience} />
        <Divider delay={5} />
        <Skills items={config.skills} />
        <Divider delay={6} />
        <Education items={config.education} />
        <Divider delay={7} />
        <Writing items={config.writing} />
      </main>
      <Footer name={config.name} />
    </div>
  );
}

function Divider({ delay }) {
  return (
    <hr
      className={`border-none h-px bg-zinc-200 dark:bg-zinc-800/60 animate-fade-up delay-${delay}`}
    />
  );
}

export default App;
