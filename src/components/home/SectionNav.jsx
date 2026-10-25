import React, { useEffect, useState } from 'react'
import { focusRing } from '../../lib/styles'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
];

const SectionNav = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Treat a section as active when it crosses a band just above the middle of the viewport.
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sections">
      <ul className="flex flex-col">
        {sections.map(({ id, label }, idx) => {
          const active = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active ? 'true' : undefined}
                className={`group flex min-h-11 items-center gap-3 font-mono text-sm transition-colors duration-200 motion-reduce:transition-none ${active ? 'text-text' : 'text-text-2 hover:text-text'} ${focusRing}`}
              >
                <span className="text-accent">{String(idx + 1).padStart(2, '0')}</span>
                <span
                  className={`h-px bg-rule transition-[width] duration-200 motion-reduce:transition-none ${active ? 'w-16' : 'w-8 group-hover:w-12'}`}
                  aria-hidden="true"
                />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default SectionNav
