import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme';
const THEME_COLORS = { dark: '#0F1115', light: '#F7F7F8' };
const lightQuery = '(prefers-color-scheme: light)';

const readStored = () => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
}

// index.html sets data-theme before first paint; this hook keeps it in sync afterwards.
export const useTheme = () => {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Follow the system setting until the visitor picks a theme themselves.
  useEffect(() => {
    const media = window.matchMedia(lightQuery);
    const onChange = (e) => {
      if (!readStored()) setTheme(e.matches ? 'light' : 'dark');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
}
