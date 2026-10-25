import React from 'react'

const Placeholder = ({ children }) => {
  return (
    <span className="rounded px-1 bg-placeholder-bg text-placeholder">
      {children}
    </span>
  )
}

export default Placeholder
