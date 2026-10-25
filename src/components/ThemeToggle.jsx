import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../lib/theme'
import { focusRing } from '../lib/styles'

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  const Icon = theme === 'dark' ? FiSun : FiMoon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-line-strong text-text-2 transition-colors motion-reduce:transition-none hover:border-muted hover:text-text ${focusRing} ${className}`}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  )
}

export default ThemeToggle
