import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, ChevronDown, X } from "lucide-react";
import { useState } from "react";

import { LINKEDIN_URL, PageIntro } from "../components/site-shell";
import { Button } from "../components/ui/button";

const READING_URL = "https://tdrowberry.github.io/Rowberrys-Reading-Recommendations/";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing & Updates — Tyler Rowberry" },
      { name: "description", content: "Writing and updates from Tyler Rowberry on strategy, technology, global work, and life at Kellogg." },
      { property: "og:title", content: "Writing & Updates — Tyler Rowberry" },
      { property: "og:description", content: "Notes on strategy, technology, global work, and the ideas Tyler is exploring." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/writing" }],
  }),
  component: WritingPage,
});

function WritingPage() {
  const [showReading, setShowReading] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageIntro eyebrow="04 / Field notes" title={<>Ideas in progress.<br /><span className="font-body font-normal italic text-muted-foreground">Updates from the field.</span></>}>
        This is where I&apos;ll collect writing on strategy, technology, global experience, and the lessons I&apos;m carrying forward.
      </PageIntro>

      <section className="py-20 sm:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase text-accent">Publication status</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold">The notebook is open.</h2>
          </div>
          <div className="md:col-span-8">
            <div className="border border-border bg-card p-8 sm:p-12">
              <p className="max-w-xl text-xl leading-relaxed">I&apos;m preparing the first entries for this collection. In the meantime, LinkedIn is the best place to follow current professional updates and join the conversation.</p>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link-underline mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase">Follow on LinkedIn <ArrowUpRight className="size-4" /></a>
            </div>
            <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
              {[
                ["Strategy", "Long-range choices and practical execution."],
                ["Technology", "AI, transformation, and organizational change."],
                ["Field notes", "Global work, Kellogg, service, and life outside it."],
              ].map(([title, text]) => <div key={title} className="bg-background p-6"><h3 className="font-display font-extrabold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase text-accent">On my bookshelf</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold">Reading recommendations.</h2>
          </div>
          <div className="md:col-span-8">
            <div className="border border-border bg-card p-8 sm:p-12">
              <BookOpen className="size-7 text-accent" aria-hidden="true" />
              <p className="mt-6 max-w-xl text-xl leading-relaxed">Explore books I&apos;ve read and recommend, without leaving this site.</p>
              <Button
                type="button"
                onClick={() => setShowReading((visible) => !visible)}
                aria-expanded={showReading}
                aria-controls="reading-recommendations"
                className="mt-8 h-11 rounded-sm px-5 font-mono text-xs uppercase"
              >
                {showReading ? <>Close recommendations <X /></> : <>Browse recommendations <ChevronDown /></>}
              </Button>
            </div>
          </div>
        </div>

        {showReading ? (
          <div id="reading-recommendations" className="page-reveal mt-10 border border-border bg-card" aria-label="Tyler Rowberry's book recommendations">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
              <div>
                <p className="font-display font-extrabold">Rowberry&apos;s Reading Recommendations</p>
                <p className="mt-1 font-mono text-[10px] uppercase text-muted-foreground">Embedded reading list</p>
              </div>
              <a href={READING_URL} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 font-mono text-[10px] uppercase">
                Open separately <ArrowUpRight className="size-3.5" />
              </a>
            </div>
            <iframe
              src={READING_URL}
              title="Rowberry's Reading Recommendations"
              loading="lazy"
              className="h-[70vh] min-h-[560px] w-full bg-background sm:min-h-[680px]"
            />
          </div>
        ) : null}
      </section>
    </main>
  );
}