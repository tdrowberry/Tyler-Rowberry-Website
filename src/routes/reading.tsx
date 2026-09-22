import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen } from "lucide-react";

import { PageIntro } from "../components/site-shell";

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
      <PageIntro eyebrow="05 / On my bookshelf" title={<>Reading<br /><span className="font-body font-normal italic text-muted-foreground">recommendations.</span></>}>
        Books I&apos;ve read and recommend, embedded below without leaving this site.
      </PageIntro>

      <section className="pb-14 sm:pb-20">
        <div className="border border-border bg-card">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <BookOpen className="size-5 text-accent" aria-hidden="true" />
              <div>
                <p className="font-display font-extrabold">Rowberry&apos;s Reading Recommendations</p>
                <p className="mt-0.5 font-mono text-[10px] uppercase text-muted-foreground">Embedded reading list</p>
              </div>
            </div>
            <a href={READING_URL} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 font-mono text-[10px] uppercase">
              Open separately <ArrowUpRight className="size-3.5" />
            </a>
          </div>
          <iframe
            src={READING_URL}
            title="Rowberry's Reading Recommendations"
            loading="lazy"
            className="h-[75vh] min-h-[600px] w-full bg-background"
          />
        </div>
      </section>
    </main>
  );
}
