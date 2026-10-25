import React from 'react'
import Button from '../Button'
import SectionNav from './SectionNav'
import ThemeToggle from '../ThemeToggle'
import { site } from '../../data/site'

const ProfileHeader = () => {
  return (
    <header className="flex flex-col gap-7 pt-[clamp(48px,8vw,104px)] lg:sticky lg:top-0 lg:max-h-screen lg:flex-[1_1_320px] lg:overflow-y-auto lg:pb-12">
      <div className="flex items-start justify-between gap-4">
        <img
          src={site.photo}
          alt={site.name}
          className="h-[88px] w-[88px] rounded-full border-2 border-line object-cover"
        />
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-2.5">
        <h1 className="font-display text-[clamp(38px,4vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-text">
          {site.name}
        </h1>
        <p className="font-display text-[22px] font-medium text-accent">{site.role}</p>
        <p className="max-w-[360px] text-muted">{site.tagline}</p>
      </div>

      <SectionNav />

      <div className="flex flex-wrap gap-2.5">
        <Button variant="outline" href={site.links.github} external>GitHub</Button>
        <Button variant="outline" href={site.links.linkedin} external>LinkedIn</Button>
        <Button variant="primary" href={site.links.resume} external>Résumé (PDF)</Button>
      </div>

      <p className="flex items-center gap-2 font-mono text-[13px] text-muted">
        {site.status && <span className="h-2 w-2 shrink-0 rounded-full bg-status" aria-hidden="true" />}
        <span>{site.location}{site.status && ` · ${site.status}`}</span>
      </p>
    </header>
  )
}

export default ProfileHeader
