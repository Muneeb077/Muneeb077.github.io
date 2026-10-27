import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import SectionLabel from '../components/SectionLabel'
import Card from '../components/Card'
import Button from '../components/Button'
import RichText from '../components/RichText'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { focusRing } from '../lib/styles'

const H2 = ({ children }) => (
  <h2 className="font-display text-[28px] font-semibold tracking-[-0.01em] text-text">{children}</h2>
)

const TextBlock = ({ title, text }) => (
  <section className="flex flex-col gap-4">
    <H2>{title}</H2>
    <p className="max-w-[700px] text-text-2"><RichText text={text} /></p>
  </section>
)

const MetaCell = ({ label, value, wide = false }) => (
  <div className={`flex min-w-[180px] flex-col gap-1 bg-ink px-5 py-4 ${wide ? 'flex-[2_1_360px]' : 'flex-[1_1_180px]'}`}>
    <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">{label}</p>
    <p className="font-medium text-text"><RichText text={value} /></p>
  </div>
)

const iconButton = `inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-text hover:border-line-strong ${focusRing}`;

const Gallery = ({ images }) => {
  const dialogRef = useRef(null);
  const [active, setActive] = useState(null);

  const open = (idx) => {
    setActive(idx);
    dialogRef.current?.showModal();
  }
  const step = (delta) => setActive(i => (i + delta + images.length) % images.length);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  }

  const current = active !== null ? images[active] : null;

  return (
    <section className="flex flex-col gap-5">
      <H2>Screenshots</H2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((image, idx) => (
          <figure key={image.src} className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => open(idx)}
              aria-label={`Enlarge screenshot: ${image.caption}`}
              className={`group block overflow-hidden rounded-2xl border border-line ${focusRing}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-[16/10] h-auto w-full object-cover object-top transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.02]"
              />
            </button>
            <figcaption className="font-mono text-[13px] text-muted">{image.caption}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onKeyDown={onKeyDown}
        onClick={e => { if (e.target === dialogRef.current) dialogRef.current.close(); }}
        aria-label="Screenshot viewer"
        className="m-auto max-h-none max-w-none bg-transparent p-4 backdrop:bg-ink/90"
      >
        {current && (
          <div className="flex w-[min(1200px,calc(100vw-32px))] flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-[13px] text-muted">{active + 1} / {images.length}</p>
              <button type="button" onClick={() => dialogRef.current.close()} aria-label="Close" className={iconButton}>
                <FiX size={20} aria-hidden="true" />
              </button>
            </div>
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[calc(100vh-200px)] w-full rounded-2xl border border-line object-contain"
            />
            <div className="flex items-center justify-between gap-4">
              <button type="button" onClick={() => step(-1)} aria-label="Previous screenshot" className={iconButton}>
                <FiChevronLeft size={20} aria-hidden="true" />
              </button>
              <p className="text-center font-mono text-[13px] text-text-2">{current.caption}</p>
              <button type="button" onClick={() => step(1)} aria-label="Next screenshot" className={iconButton}>
                <FiChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}

const getNextFeatured = (project) => {
  const featured = projects.filter(p => p.featured);
  const idx = featured.findIndex(p => p.id === project.id);
  return featured[(idx + 1) % featured.length];
}

const CaseStudyPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const study = project?.caseStudy;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project && study) document.title = `${project.title} — Case study · ${site.name}`;
  }, [project, study]);

  if (!study) return <Navigate to="/" replace />;

  const next = getNextFeatured(project);
  const nextTo = next.caseStudy ? `/projects/${next.id}` : '/#projects';

  return (
    <main className="mx-auto flex max-w-[880px] flex-col gap-14 px-6 py-[clamp(48px,8vw,104px)]">
      <div className="-mb-6 flex items-center">
        <Link
          to="/#projects"
          className={`inline-flex min-h-11 items-center gap-2 font-mono text-sm text-text-2 hover:text-text ${focusRing}`}
        >
          <FiArrowLeft size={16} aria-hidden="true" />
          All projects
        </Link>
      </div>

      <header className="flex flex-col gap-5">
        <SectionLabel>Case study · {project.kind}</SectionLabel>
        <h1 className="font-display text-[clamp(40px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.02em] text-text">
          {project.title}
        </h1>
        <p className="max-w-[700px] text-[21px] leading-normal text-text-2">
          <RichText text={project.summary} highlight={project.highlight} />
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-px overflow-hidden rounded-2xl border border-line bg-line">
          <MetaCell label="Stack" value={study.stackLine} wide />
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Button variant="primary" href={project.github} external>View code</Button>
          {project.demo && <Button variant="outline" href={project.demo} external>Live demo</Button>}
        </div>
      </div>

      <figure className="flex flex-col gap-3">
        <img
          src={project.cover}
          alt={study.heroAlt}
          className="h-auto w-full rounded-2xl border border-line"
        />
        <figcaption className="font-mono text-[13px] text-muted">{study.heroCaption}</figcaption>
      </figure>

      <TextBlock title="The problem" text={study.problem} />

      <section className="flex flex-col gap-5">
        <H2>What I built</H2>
        <div className="flex flex-wrap gap-4">
          {study.features.map((feature, idx) => (
            <Card as="article" key={feature.title} className="flex min-w-0 flex-[1_1_240px] flex-col gap-2 p-6">
              <p className="font-mono text-[13px] text-accent">{String(idx + 1).padStart(2, '0')}</p>
              <h3 className="font-display text-[19px] font-semibold text-text">{feature.title}</h3>
              <p className="text-base text-text-2"><RichText text={feature.body} /></p>
            </Card>
          ))}
        </div>
      </section>

      {study.gallery?.length > 0 && <Gallery images={study.gallery} />}

      <section className="flex flex-col gap-5">
        <H2>Key decisions</H2>
        <div>
          {study.decisions.map(decision => (
            <div key={decision.title} className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line py-5 last:border-b">
              <h3 className="flex-[1_1_220px] font-display text-lg font-semibold text-text">{decision.title}</h3>
              <p className="flex-[2_1_360px] text-text-2"><RichText text={decision.body} /></p>
            </div>
          ))}
        </div>
      </section>

      <TextBlock title="What was hard, and what I learned" text={study.learned} />

      <Link to={nextTo} className={`group block rounded-2xl ${focusRing}`}>
        <Card className="flex items-center justify-between gap-4 p-7 transition-colors motion-reduce:transition-none group-hover:border-line-strong">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Next project</p>
            <p className="font-display text-[22px] font-semibold text-text">{next.title}</p>
          </div>
          <FiArrowRight size={22} aria-hidden="true" className="shrink-0 text-accent transition-transform motion-reduce:transition-none group-hover:translate-x-1" />
        </Card>
      </Link>
    </main>
  )
}

export default CaseStudyPage
