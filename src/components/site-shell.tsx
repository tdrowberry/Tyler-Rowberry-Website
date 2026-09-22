import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import lemurAsset from "../assets/tyler-lemur.jpg.asset.json";
import resumeAsset from "../assets/tyler-rowberry-resume.pdf.asset.json";

export const LINKEDIN_URL = "https://www.linkedin.com/in/tyler-rowberry/";
export const EMAIL_URL = "mailto:tdrowberry@gmail.com";
export const RESUME_URL = resumeAsset.url;

const navigation = [
  { to: "/", label: "Overview", number: "01" },
  { to: "/experience", label: "Experience", number: "02" },
  { to: "/about", label: "About", number: "03" },
  { to: "/writing", label: "Writing", number: "04" },
  { to: "/contact", label: "Contact", number: "05" },
] as const;

export function LemurIdentity({ className = "size-9" }: { className?: string }) {
  return (
    <span className={`${className} block shrink-0 overflow-hidden rounded-sm ring-1 ring-foreground/15`}>
      <img src={lemurAsset.url} alt="Golden lemur, Tyler Rowberry's site icon" className="size-full object-cover object-[50%_34%]" />
    </span>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <LemurIdentity />
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
                {item.number} {item.label}
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
                  className="flex items-center justify-between border-b border-border py-3 font-display font-bold"
                >
                  {item.label}<span className="font-mono text-[10px] text-accent">{item.number}</span>
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      {children}

      <footer className="bg-foreground py-20 text-background sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 md:grid-cols-2 md:items-end">
          <div>
            <LemurIdentity className="size-16" />
            <h2 className="mt-10 font-display text-4xl font-extrabold sm:text-5xl">Let&apos;s discuss<br />strategy.</h2>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 text-lg">
                LinkedIn <ArrowUpRight className="size-4" />
              </a>
              <a href={EMAIL_URL} className="link-underline inline-flex items-center gap-2 text-lg">
                Email <Mail className="size-4" />
              </a>
              <a href={RESUME_URL} download="Tyler-Rowberry-Resume.pdf" className="link-underline inline-flex items-center gap-2 text-lg">
                Résumé <Download className="size-4" />
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <p className="max-w-sm text-sm leading-relaxed text-background/65 md:ml-auto">
              Based in Evanston, Illinois. Pursuing opportunities at the intersection of corporate strategy, technology, and global impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase text-background/60 md:justify-end">
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
    <section className="page-reveal border-b border-border py-20 sm:py-28">
      <p className="mb-6 font-mono text-[10px] uppercase text-accent sm:text-xs">{eyebrow}</p>
      <h1 className="max-w-4xl text-balance font-display text-5xl font-extrabold leading-[0.98] sm:text-7xl">{title}</h1>
      <div className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{children}</div>
    </section>
  );
}