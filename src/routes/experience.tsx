import { createFileRoute } from "@tanstack/react-router";

import experienceBg from "../assets/backgrounds/experience-bg.jpg";
import { PageBackground, PageIntro } from "../components/site-shell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Tyler Rowberry" },
      { name: "description", content: "Tyler Rowberry's experience across corporate strategy, consulting, technology, venture capital, and social impact." },
      { property: "og:title", content: "Experience — Tyler Rowberry" },
      { property: "og:description", content: "A career record spanning L.E.K. Consulting, technology strategy, growth, and global work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const roles = [
  {
    period: "2025 — 2026",
    organization: "L.E.K. Consulting",
    role: "Global IT Strategy Manager",
    location: "Houston, Texas",
    summary: "Led strategy, governance, change, and organizational work for a global technology function during a period of transformation.",
    details: [
      "Architected the firm's first living three-year technology roadmap across 17 business functions, 87+ stakeholders, and 200+ identified gaps.",
      "Drove 2025 strategic initiatives to 90% on-time completion through executive reporting for senior governance forums.",
      "Led adoption of an AI agent for routine communications, reducing output by 48% while maintaining quality.",
      "Sustained delivery across 72 processes in 11 domains while leading the team through a director transition.",
    ],
  },
  {
    period: "2024 — 2025",
    organization: "L.E.K. Consulting",
    role: "Associate Consultant",
    location: "Houston & Riyadh",
    summary: "Combined quantitative strategy work with on-the-ground problem solving across healthcare, professional services, and international operations.",
    details: [
      "Rebuilt an EBITDA forecast across revenue, new-location growth, and margin drivers for a dental services refinancing.",
      "Built market-sizing and segmentation models for skilled nursing staffing and commercial fitness certification clients.",
      "Co-led the IT setup of L.E.K.'s Riyadh office, navigating local vendor, data localization, and infrastructure constraints.",
    ],
  },
  {
    period: "2022 — 2024",
    organization: "L.E.K. Consulting",
    role: "Associate → Senior Associate",
    location: "Houston, Texas",
    summary: "Delivered diligence and growth strategy across healthcare and industrial markets.",
    details: [
      "Executed competitive and market analysis across nine due diligence and two strategy engagements.",
      "Contributed to a successful multi-billion-dollar carve-out of a major home security provider.",
      "Ran research programs spanning 350+ interviews, surveys, and expert outreach efforts.",
    ],
  },
];

function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageBackground image={experienceBg}>
      <PageIntro eyebrow="Career record" title={<>Strategy in practice,<br /><span className="font-body font-normal italic text-muted-foreground">from diligence to transformation.</span></>}>
        Four years at L.E.K. built a foundation in rigorous analysis, executive communication, and leading through ambiguity.
      </PageIntro>

      <section className="py-14 sm:py-20">
        <div className="space-y-12">
          {roles.map((item) => (
            <article key={item.role} className="grid gap-6 border-b border-border pb-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="font-mono text-[10px] uppercase text-accent">{item.period}</p>
                <h2 className="mt-3 font-display text-2xl font-extrabold">{item.organization}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                <p className="mt-4 font-mono text-[9px] uppercase text-muted-foreground">{item.location}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl italic leading-relaxed">{item.summary}</p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {item.details.map((detail) => <li key={detail} className="border-l-2 border-accent/30 pl-5">{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          <article className="bg-background p-6"><p className="font-mono text-[10px] uppercase text-accent">2021</p><h3 className="mt-3 font-display text-xl font-extrabold">Weave</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Tested product-market fit in home services and helped translate customer research into go-to-market recommendations.</p></article>
          <article className="bg-background p-6"><p className="font-mono text-[10px] uppercase text-accent">2021</p><h3 className="mt-3 font-display text-xl font-extrabold">Peterson Ventures</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Evaluated pre-seed and seed-stage businesses and conducted founder diligence across varied industries.</p></article>
          <article className="bg-background p-6"><p className="font-mono text-[10px] uppercase text-accent">2020 — 2021</p><h3 className="mt-3 font-display text-xl font-extrabold">Maak Impact</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Supported business-model and human-centered design work for a social enterprise operating in Madagascar.</p></article>
        </div>
      </section>
      </PageBackground>
    </main>
  );
}