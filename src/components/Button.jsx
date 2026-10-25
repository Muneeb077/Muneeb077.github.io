import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import Placeholder from './Placeholder'
import { isPlaceholder } from '../lib/placeholder'
import { focusRing } from '../lib/styles'

const variants = {
  primary: 'bg-accent text-on-accent font-semibold border border-accent',
  outline: 'border border-line-strong text-text font-medium hover:border-muted',
};

const Button = ({ variant = 'outline', href, to, external = false, children }) => {
  const pending = !to && isPlaceholder(href);
  // Placeholder text isn't readable on the accent fill, so unfilled links fall back to outline.
  const className = `inline-flex min-h-11 items-center gap-1.5 rounded-[10px] px-4 text-[15px] transition-colors motion-reduce:transition-none ${variants[pending ? 'outline' : variant]} ${focusRing}`;
  const arrow = external ? <FiArrowUpRight size={14} aria-hidden="true" /> : null;

  if (to) {
    return <Link to={to} className={className}>{children}</Link>;
  }

  // The URL hasn't been filled in yet: show the button with its placeholder but don't link anywhere.
  if (pending) {
    return (
      <a aria-disabled="true" className={`${className} cursor-not-allowed`}>
        {children} <Placeholder>{href}</Placeholder>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={className}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
      {arrow}
    </a>
  )
}

export default Button
