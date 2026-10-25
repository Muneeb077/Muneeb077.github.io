import React, { useEffect, useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'
import Button from '../Button'
import SectionNav from './SectionNav'
import { site } from '../../data/site'
import { focusRing } from '../../lib/styles'

const CopyEmail = ({ email }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked; the address is still selectable by hand.
    }
  };

  const Icon = copied ? FiCheck : FiCopy;

  return (
    <p className="flex items-center gap-1 font-mono text-[13px] text-text-2">
      <span className="select-all">{email}</span>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        title="Copy email address"
        className={`-my-3 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] text-muted transition-colors motion-reduce:transition-none hover:text-text ${focusRing}`}
      >
        <Icon size={15} aria-hidden="true" className={copied ? 'text-status' : ''} />
      </button>
      <span role="status" className="text-status">{copied ? 'Copied' : ''}</span>
    </p>
  )
}

const ProfileHeader = () => {
  return (
    <header className="flex flex-col gap-7 pt-[clamp(48px,8vw,104px)] lg:sticky lg:top-0 lg:max-h-screen lg:flex-[1_1_320px] lg:overflow-y-auto lg:pb-12">
      <img
        src={site.photo}
        alt={site.name}
        className="h-[88px] w-[88px] rounded-full border-2 border-line object-cover"
      />

      <div className="flex flex-col gap-2.5">
        <h1 className="font-display text-[clamp(38px,4vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-text">
          {site.name}
        </h1>
        <p className="font-display text-[22px] font-medium text-accent">{site.role}</p>
        <p className="max-w-[360px] text-muted">{site.tagline}</p>
      </div>

      <SectionNav />

      <div className="flex flex-wrap gap-2.5">
        <Button variant="outline" href={site.links.github} external>GitHub</Button>
        <Button variant="outline" href={site.links.linkedin} external>LinkedIn</Button>
        <Button variant="primary" href={site.links.resume} external>Résumé (PDF)</Button>
      </div>

      <CopyEmail email={site.links.email} />

      <p className="flex items-center gap-2 font-mono text-[13px] text-muted">
        {site.status && <span className="h-2 w-2 shrink-0 rounded-full bg-status" aria-hidden="true" />}
        <span>{site.location}{site.status && ` · ${site.status}`}</span>
      </p>
    </header>
  )
}

export default ProfileHeader
