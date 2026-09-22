import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import { EMAIL_URL, LINKEDIN_URL, PageIntro, RESUME_URL } from "../components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tyler Rowberry" },
      { name: "description", content: "Connect with Tyler Rowberry about corporate strategy, technology, and professional opportunities." },
      { property: "og:title", content: "Contact — Tyler Rowberry" },
      { property: "og:description", content: "Connect with Tyler Rowberry about strategy roles and thoughtful collaboration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageIntro eyebrow="Contact" title={<>A good conversation<br /><span className="font-body font-normal italic text-muted-foreground">is a useful place to start.</span></>}>
        I&apos;m especially interested in corporate strategy opportunities in technology and conversations with people solving consequential problems.
      </PageIntro>

      <section className="grid gap-px border-x border-b border-border bg-border md:grid-cols-3">
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="group bg-background p-6 transition-colors hover:bg-card sm:p-8">
          <ArrowUpRight className="size-5 text-accent" /><p className="mt-8 font-mono text-[10px] uppercase text-muted-foreground">Professional profile</p><h2 className="mt-3 font-display text-2xl font-extrabold group-hover:text-accent">LinkedIn</h2>
        </a>
        <a href={EMAIL_URL} className="group bg-background p-6 transition-colors hover:bg-card sm:p-8">
          <Mail className="size-5 text-accent" /><p className="mt-8 font-mono text-[10px] uppercase text-muted-foreground">Direct note</p><h2 className="mt-3 break-words font-display text-xl font-extrabold group-hover:text-accent">tdrowberry@gmail.com</h2>
        </a>
        <a href={RESUME_URL} download="Tyler-Rowberry-Resume.pdf" className="group bg-background p-6 transition-colors hover:bg-card sm:p-8">
          <Download className="size-5 text-accent" /><p className="mt-8 font-mono text-[10px] uppercase text-muted-foreground">Background</p><h2 className="mt-3 font-display text-2xl font-extrabold group-hover:text-accent">Download resume</h2>
        </a>
      </section>

      <section className="py-14 sm:py-20">
        <div className="grid gap-8 md:grid-cols-12"><p className="font-mono text-[10px] uppercase text-accent md:col-span-4">Timing</p><p className="max-w-2xl text-xl leading-relaxed md:col-span-8">Completing the one-year MBA program at Northwestern University&apos;s Kellogg School of Management, graduating June 2027.</p></div>
      </section>
    </main>
  );
}