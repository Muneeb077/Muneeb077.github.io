import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProfileHeader from '../components/home/ProfileHeader'
import About from '../components/home/About'
import Experience from '../components/home/Experience'
import Projects from '../components/home/Projects'
import Stack from '../components/home/Stack'
import Contact from '../components/home/Contact'
import { site } from '../data/site'

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = `${site.name} — ${site.role}`;
  }, []);

  // Coming back from another route (e.g. /#projects), the browser won't scroll on its own.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 lg:flex-row">
      <ProfileHeader />
      <main className="flex min-w-0 flex-col gap-24 pt-[clamp(48px,8vw,104px)] pb-16 lg:flex-[999_1_560px]">
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
        <footer className="font-mono text-xs text-muted">
          Built with React + Tailwind · Deployed on GitHub Pages
        </footer>
      </main>
    </div>
  )
}

export default HomePage
