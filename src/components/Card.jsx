import React from 'react'

const Card = ({ as = 'div', className = '', children, ...props }) => {
  const Component = as;
  return (
    <Component
      className={`overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Card
