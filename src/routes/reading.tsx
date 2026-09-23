import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import readingBg from "../assets/backgrounds/reading-bg.jpg";
import { PageBackground } from "../components/site-shell";

const READING_URL = "https://tdrowberry.github.io/Rowberrys-Reading-Recommendations/";

export const Route = createFileRoute("/reading")({
  head: () => ({
    meta: [
      { title: "Reading — Tyler Rowberry" },
      { name: "description", content: "Books Tyler Rowberry has read and recommends." },
      { property: "og:title", content: "Reading — Tyler Rowberry" },
      { property: "og:description", content: "Tyler Rowberry's reading recommendations, embedded from his book site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reading" }],
  }),
  component: ReadingPage,
});

function ReadingPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageBackground image={readingBg}>
      <section className="page-reveal flex flex-wrap items-center justify-between gap-4 pb-6 pt-14 sm:pt-20">
        <h1 className="font-display text-xl font-extrabold sm:text-2xl">Rowberry&apos;s Reading Recommendations</h1>
        <a href={READING_URL} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 font-mono text-[10px] uppercase">
          Open separately <ArrowUpRight className="size-3.5" />
        </a>
      </section>

      <section className="pb-14 sm:pb-20">
        <div className="border border-border bg-card">
          <iframe
            src={READING_URL}
            title="Rowberry's Reading Recommendations"
            loading="lazy"
            className="h-[75vh] min-h-[600px] w-full bg-background"
          />
        </div>
      </section>
      </PageBackground>
    </main>
  );
}
