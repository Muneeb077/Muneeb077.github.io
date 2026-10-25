import React from 'react'
import SectionLabel from '../SectionLabel'
import Card from '../Card'
import Chip from '../Chip'
import { site } from '../../data/site'

const Stack = () => {
  return (
    <section id="stack" className="flex scroll-mt-8 flex-col gap-5">
      <SectionLabel index="04">Stack</SectionLabel>
      <div className="flex flex-wrap gap-4">
        {site.stack.map(group => (
          <Card key={group.title} className="flex min-w-0 flex-[1_1_240px] flex-col gap-4 p-6">
            <h3 className="font-display text-lg font-semibold text-text">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => <Chip key={item}>{item}</Chip>)}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Stack
