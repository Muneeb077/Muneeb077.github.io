import React from 'react'
import RichText from './RichText'

const Chip = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-line-strong px-2.5 py-1 font-mono text-xs leading-none text-text-2">
      {typeof children === 'string' ? <RichText text={children} /> : children}
    </span>
  )
}

export default Chip
