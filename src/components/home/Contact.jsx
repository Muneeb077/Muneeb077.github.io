import React from 'react'
import Card from '../Card'
import Button from '../Button'
import RichText from '../RichText'
import { site } from '../../data/site'
import { isPlaceholder } from '../../lib/placeholder'

const Contact = () => {
  const { email, linkedin } = site.links;

  return (
    <section id="contact" className="scroll-mt-8">
      <Card className="flex flex-col gap-5 p-10">
        <h2 className="font-display text-[32px] font-semibold tracking-[-0.01em] text-text">Let's talk.</h2>
        <p className="max-w-[680px] text-text-2">
          I'm looking for <RichText text={site.lookingFor} /> roles. Email is the fastest way to reach me.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <Button variant="primary" href={isPlaceholder(email) ? email : `mailto:${email}`}>Email me</Button>
          <Button variant="outline" href={linkedin} external>LinkedIn</Button>
        </div>
      </Card>
    </section>
  )
}

export default Contact
