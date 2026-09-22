import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import headshot from "../assets/photos/tyler-professional-headshot.jpg";
import resumePdf from "../assets/photos/tyler-rowberry-resume.pdf";

export const LINKEDIN_URL = "https://www.linkedin.com/in/tyler-rowberry/";
export const EMAIL_URL = "mailto:tdrowberry@gmail.com";
export const RESUME_URL = resumePdf;

const navigation = [
  { to: "/", label: "Overview" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/reading", label: "Reading" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteIdentity({ className = "size-9" }: { className?: string }) {
  return (
    <span className={`${className} block shrink-0 overflow-hidden rounded-sm ring-1 ring-foreground/15`}>
      <img src={headshot} alt="Tyler Rowberry" className="size-full object-cover object-[50%_12%]" />
    </span>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <SiteIdentity />
            <span className="font-display text-sm font-extrabold uppercase sm:text-base">Tyler Rowberry</span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="font-mono text-[10px] uppercase text-muted-foreground transition-colors hover:text-accent"
                activeProps={{ className: "text-accent" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-sm border border-border text-foreground lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen ? (
          <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-5 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-border py-3 font-display font-bold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      {children}

      <footer className="bg-foreground py-14 text-background sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-2 md:items-end">
          <div>
            <SiteIdentity className="size-16" />
            <h2 className="mt-6 font-display text-4xl font-extrabold sm:text-5xl">Let&apos;s discuss<br />strategy.</h2>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 text-lg">
                LinkedIn <ArrowUpRight className="size-4" />
              </a>
              <a href={EMAIL_URL} className="link-underline inline-flex items-center gap-2 text-lg">
                Email <Mail className="size-4" />
              </a>
              <a href={RESUME_URL} download="Tyler-Rowberry-Resume.pdf" className="link-underline inline-flex items-center gap-2 text-lg">
                Resume <Download className="size-4" />
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <p className="max-w-sm text-sm leading-relaxed text-background/65 md:ml-auto">
              Pursuing opportunities at the intersection of corporate strategy, technology, and global impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase text-background/60 md:justify-end">
              <p>© 2026 Tyler Rowberry</p>
              <p>Made with AI</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="page-reveal border-b border-border py-14 sm:py-20">
      <p className="mb-4 font-mono text-[10px] uppercase text-accent sm:text-xs">{eyebrow}</p>
      <h1 className="max-w-4xl text-balance font-display text-5xl font-extrabold leading-[0.98] sm:text-7xl">{title}</h1>
      <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{children}</div>
    </section>
  );
}

/** Wraps a page's entire <main> content (everything down to the footer, which lives
 * outside this and stays untouched) in the page's illustration, full-bleed edge to edge.
 * The art is a viewport-sized sticky layer, so it fills the screen behind the content the
 * whole way down instead of stretching across a tall page, with a light surface-tint
 * wash for text legibility. SiteShell's overflow-x-clip absorbs the w-screen breakout's
 * scrollbar-width overshoot (clip, not hidden, so sticky keeps working). */
export function PageBackground({ image, children }: { image: string; children: ReactNode }) {
  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-surface-tint">
        <div className="sticky top-0 h-screen">
          <img src={image} alt="" aria-hidden="true" className="h-full w-full object-cover object-right" />
          <div className="absolute inset-0 bg-surface-tint/35 dark:bg-surface-tint/85" />
        </div>
      </div>
      {children}
    </div>
  );
}