import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionLabel from '../SectionLabel'
import Card from '../Card'
import Chip from '../Chip'
import Button from '../Button'
import Placeholder from '../Placeholder'
import RichText from '../RichText'
import { projects } from '../../data/projects'
import { isPlaceholder } from '../../lib/placeholder'
import { focusRing } from '../../lib/styles'

const ProjectButtons = ({ project }) => (
  <div className="flex flex-wrap gap-2.5">
    {project.caseStudy && (
      <Button variant="primary" to={`/projects/${project.id}`}>Read case study</Button>
    )}
    <Button variant="outline" href={project.github} external>Code</Button>
    {project.demo && (
      <Button variant="outline" href={project.demo} external>Live demo</Button>
    )}
  </div>
)

const FeaturedCard = ({ project, large = false }) => (
  <Card as="article" className={`flex flex-col ${large ? '' : 'min-w-0 lg:flex-[1_1_300px]'}`}>
    <img
      src={project.cover}
      alt={project.coverAlt}
      className={`w-full border-b border-line object-cover ${large ? 'h-[340px] object-top' : 'h-[200px] object-[top_left]'}`}
    />
    <div className={`flex flex-1 flex-col gap-4 ${large ? 'p-7' : 'p-6'}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className={`font-display font-semibold text-text ${large ? 'text-[26px]' : 'text-[21px]'}`}>
          {project.title}
        </h3>
        {project.kind && <p className="font-mono text-xs text-muted">{project.kind}</p>}
      </div>
      <p className={`text-base text-text-2 ${large ? '' : 'flex-1'}`}>
        <RichText text={project.summary} highlight={project.highlight} />
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => <Chip key={t}>{t}</Chip>)}
      </div>
      <ProjectButtons project={project} />
    </div>
  </Card>
)

const ProjectRow = ({ project }) => {
  const pending = isPlaceholder(project.github);
  const content = (
    <>
      <span className="flex flex-[1_1_220px] flex-wrap items-center gap-x-2 gap-y-1 font-display text-[19px] font-semibold text-text transition-colors motion-reduce:transition-none group-hover:text-accent">
        <span>{project.title}</span>
        {pending ? (
          <span className="font-mono text-xs font-normal"><Placeholder>{project.github}</Placeholder></span>
        ) : (
          <FiArrowUpRight
            size={16}
            aria-hidden="true"
            className="-translate-x-1 opacity-0 transition motion-reduce:transition-none group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
          />
        )}
      </span>
      <span className="flex-[3_1_320px] text-base text-text-2">
        <RichText text={project.summary} highlight={project.highlight} />
      </span>
      <span className="flex-[1_1_160px] font-mono text-xs text-muted sm:text-right">
        {project.tech.join(' · ')}
      </span>
    </>
  );
  const className = `flex flex-wrap items-baseline gap-x-6 gap-y-2 py-5`;

  // Without a real repo URL the row isn't a link yet.
  if (pending) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${className} ${focusRing}`}
    >
      {content}
    </a>
  );
}

const Projects = () => {
  const featured = projects.filter(p => p.featured);
  const [first, ...otherFeatured] = featured;
  const more = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="flex scroll-mt-8 flex-col gap-7">
      <div className="flex flex-col gap-3">
        <SectionLabel index="03">Selected work</SectionLabel>
        <h2 className="font-display text-[32px] font-semibold tracking-[-0.01em] text-text">Projects</h2>
      </div>

      {first && <FeaturedCard project={first} large />}

      {otherFeatured.length > 0 && (
        <div className="flex flex-col gap-7 lg:flex-row lg:flex-wrap">
          {otherFeatured.map(project => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {more.length > 0 && (
        <div className="mt-4 flex flex-col gap-4">
          <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">More projects</h3>
          <ul>
            {more.map(project => (
              <li key={project.id} className="border-t border-line last:border-b">
                <ProjectRow project={project} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Projects
