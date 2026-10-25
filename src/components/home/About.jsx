import React from 'react'
import SectionLabel from '../SectionLabel'
import RichText from '../RichText'
import { site } from '../../data/site'

const About = () => {
  return (
    <section id="about" className="flex scroll-mt-8 flex-col gap-5">
      <SectionLabel index="01">About</SectionLabel>
      <h2 className="font-display text-[32px] font-semibold leading-tight tracking-[-0.01em] text-text">
        {site.about.heading}
      </h2>
      {site.about.paragraphs.map((paragraph, idx) => (
        <p key={idx} className="max-w-[680px] text-text-2">
          <RichText text={paragraph} />
        </p>
      ))}
    </section>
  )
}

export default About
