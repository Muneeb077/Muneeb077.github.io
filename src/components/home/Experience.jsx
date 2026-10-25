import React from 'react'
import SectionLabel from '../SectionLabel'
import Card from '../Card'
import Chip from '../Chip'
import RichText from '../RichText'
import { site } from '../../data/site'

const Dates = ({ children }) => (
  <p className="w-40 shrink-0 pt-1 font-mono text-[13px] text-muted">
    <RichText text={children} />
  </p>
)

const Experience = () => {
  return (
    <section id="experience" className="flex scroll-mt-8 flex-col gap-5">
      <SectionLabel index="02">Experience</SectionLabel>

      {site.experience.map((job, idx) => (
        <Card as="article" key={idx} className="flex flex-wrap gap-x-6 gap-y-2 p-7">
          <Dates>{job.dates}</Dates>
          <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-3">
            <h3 className="font-display text-xl font-semibold text-text">
              <RichText text={job.title} /> · <RichText text={job.company} />
            </h3>
            <ul className="list-disc space-y-1.5 pl-5 text-base text-text-2 marker:text-muted">
              {job.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx}><RichText text={bullet} /></li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {job.tech.map(t => <Chip key={t}>{t}</Chip>)}
            </div>
          </div>
        </Card>
      ))}

      {site.education.map((entry, idx) => (
        <div key={idx} className="flex flex-wrap gap-x-6 gap-y-2 px-7">
          <Dates>{entry.dates}</Dates>
          <h3 className="min-w-0 flex-[1_1_280px] font-display text-xl font-semibold text-text">
            <RichText text={entry.title} />
          </h3>
        </div>
      ))}
    </section>
  )
}

export default Experience
