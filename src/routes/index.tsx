import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";

import headshot from "../assets/photos/tyler-professional-headshot.jpg";
import { LINKEDIN_URL, RESUME_URL } from "../components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tyler Rowberry — Corporate Strategy & Technology" },
      { name: "description", content: "Kellogg MBA candidate and former L.E.K. strategy professional focused on corporate strategy, technology, and global impact." },
      { property: "og:title", content: "Tyler Rowberry — Corporate Strategy & Technology" },
      { property: "og:description", content: "Strategy professional, Kellogg MBA candidate, and global problem solver." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8">
      <section className="page-reveal grid gap-10 border-b border-border py-14 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-8">
          <p className="mb-4 font-mono text-xs uppercase text-accent">Briefing note · MBA 2027</p>
          <h1 className="text-balance font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
            Corporate strategy<br /><span className="font-body font-normal italic text-muted-foreground">for consequential change.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            I&apos;m Tyler—a Kellogg MBA candidate and former L.E.K. strategy professional translating complex business priorities into clear, executable paths forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 font-mono text-xs uppercase">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2">LinkedIn <ArrowUpRight className="size-4" /></a>
            <a href={RESUME_URL} download="Tyler-Rowberry-Resume.pdf" className="link-underline inline-flex items-center gap-2">Download résumé <Download className="size-4" /></a>
          </div>
        </div>
        <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">
          <figure className="w-full max-w-sm overflow-hidden rounded-sm border border-border bg-card">
            <img src={headshot} alt="Tyler Rowberry" className="aspect-[4/5] w-full object-cover object-[50%_15%]" />
            <figcaption className="flex items-center justify-between p-4 font-mono text-[9px] uppercase text-muted-foreground">
              <span>Tyler Rowberry</span><span>TR / 01</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-border py-14 sm:py-18">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-extrabold">Evidence</h2>
          <p className="font-mono text-[10px] uppercase text-muted-foreground">Selected outcomes</p>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {[
            ["200+", "Capability and process gaps mapped into L.E.K.'s first living three-year technology roadmap."],
            ["90%", "On-time completion across 2025 strategic initiatives through executive-ready reporting and governance."],
            ["48%", "Reduction in routine IT communications after leading adoption of an AI-enabled operating model."],
          ].map(([value, text]) => (
            <article key={value} className="bg-background p-6 sm:p-7">
              <p className="font-display text-4xl font-extrabold text-accent">{value}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-14 sm:py-18 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase text-accent">Current chapter</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold">Kellogg & beyond</h2>
        </div>
        <div className="md:col-span-8">
          <p className="max-w-2xl text-xl leading-relaxed">At Kellogg, I&apos;m deepening my focus in strategy and finance while pursuing corporate strategy roles in technology—work that connects long-range choices with practical execution.</p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase">
            <Link to="/experience" className="link-underline inline-flex items-center gap-2">Career record <ArrowRight className="size-4" /></Link>
            <Link to="/about" className="link-underline inline-flex items-center gap-2">Beyond the résumé <ArrowRight className="size-4" /></Link>
            <Link to="/writing" className="link-underline inline-flex items-center gap-2">Writing & updates <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
