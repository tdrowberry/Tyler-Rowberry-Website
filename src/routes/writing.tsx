import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { LINKEDIN_URL, PageIntro } from "../components/site-shell";

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
  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageIntro eyebrow="Field notes" title={<>Ideas in progress.<br /><span className="font-body font-normal italic text-muted-foreground">Updates from the field.</span></>}>
        This is where I&apos;ll collect writing on strategy, technology, global experience, and the lessons I&apos;m carrying forward.
      </PageIntro>

      <section className="py-14 sm:py-20">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase text-accent">Publication status</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold">The notebook is open.</h2>
          </div>
          <div className="md:col-span-8">
            <div className="border border-border bg-card p-7 sm:p-10">
              <p className="max-w-xl text-xl leading-relaxed">I&apos;m preparing the first entries for this collection. In the meantime, LinkedIn is the best place to follow current professional updates and join the conversation.</p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase">
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2">Follow on LinkedIn <ArrowUpRight className="size-4" /></a>
                <Link to="/reading" className="link-underline inline-flex items-center gap-2">Reading recommendations <ArrowRight className="size-4" /></Link>
              </div>
            </div>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
              {[
                ["Strategy", "Long-range choices and practical execution."],
                ["Technology", "AI, transformation, and organizational change."],
                ["Field notes", "Global work, Kellogg, service, and life outside it."],
              ].map(([title, text]) => <div key={title} className="bg-background p-5"><h3 className="font-display font-extrabold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
