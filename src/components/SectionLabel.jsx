import React from 'react'

const SectionLabel = ({ index, children }) => {
  return (
    <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
      {index ? `${index} / ` : null}{children}
    </p>
  )
}

export default SectionLabel
