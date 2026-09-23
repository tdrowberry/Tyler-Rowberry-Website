import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import contactBg from "../assets/backgrounds/contact-bg.jpg";
import candidPortrait from "../assets/photos/tyler-candid-portrait.jpg";
import { EMAIL_URL, LINKEDIN_URL, PageBackground, RESUME_URL } from "../components/site-shell";

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
      <PageBackground image={contactBg}>
      <section className="page-reveal border-b border-border py-14 sm:py-20">
        <p className="mb-4 font-mono text-[10px] uppercase text-accent sm:text-xs">Contact</p>
        <h1 className="max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          Excited to get to know someone new, please reach out.
        </h1>
      </section>

      <section className="grid gap-10 py-14 sm:py-20 md:grid-cols-12 md:items-center">
        <figure className="md:col-span-5">
          <img src={candidPortrait} alt="Tyler Rowberry" className="aspect-[4/5] w-full rounded-sm object-cover" />
        </figure>
        <div className="flex flex-col gap-px border border-border bg-border md:col-span-7">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="group bg-background p-6 transition-colors hover:bg-card sm:p-8">
            <ArrowUpRight className="size-5 text-accent" /><p className="mt-4 font-mono text-[10px] uppercase text-muted-foreground">Professional profile</p><h2 className="mt-3 font-display text-2xl font-extrabold group-hover:text-accent">LinkedIn</h2>
          </a>
          <a href={EMAIL_URL} className="group bg-background p-6 transition-colors hover:bg-card sm:p-8">
            <Mail className="size-5 text-accent" /><p className="mt-4 font-mono text-[10px] uppercase text-muted-foreground">Direct note</p><h2 className="mt-3 break-words font-display text-xl font-extrabold group-hover:text-accent">tdrowberry@gmail.com</h2>
          </a>
          <a href={RESUME_URL} download="Tyler-Rowberry-Resume.pdf" className="group bg-background p-6 transition-colors hover:bg-card sm:p-8">
            <Download className="size-5 text-accent" /><p className="mt-4 font-mono text-[10px] uppercase text-muted-foreground">Background</p><h2 className="mt-3 font-display text-2xl font-extrabold group-hover:text-accent">Download resume</h2>
          </a>
        </div>
      </section>
      </PageBackground>
    </main>
  );
}