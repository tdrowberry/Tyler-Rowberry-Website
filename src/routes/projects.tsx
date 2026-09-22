import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { useState } from "react";

import projectsBg from "../assets/backgrounds/writing-bg.jpg";
import { LINKEDIN_URL, PageIntro } from "../components/site-shell";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Tyler Rowberry" },
      { name: "description", content: "Projects Tyler Rowberry has built, including Mahery and Barnyard Dice, embedded and playable." },
      { property: "og:title", content: "Projects — Tyler Rowberry" },
      { property: "og:description", content: "A couple of things Tyler has built at the intersection of strategy, technology, and AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function GameEmbed({
  eyebrow,
  title,
  description,
  note,
  url,
}: {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  url: string;
}) {
  const [visible, setVisible] = useState(false);
  const panelId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-embed`;

  return (
    <section className="border-b border-border py-14 sm:py-20">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase text-accent">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold">{title}</h2>
        </div>
        <div className="md:col-span-8">
          <div className="border border-border bg-card p-7 sm:p-10">
            <p className="max-w-xl text-lg leading-relaxed">{description}</p>
            {note ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{note}</p> : null}
            <Button
              type="button"
              onClick={() => setVisible((v) => !v)}
              aria-expanded={visible}
              aria-controls={panelId}
              className="mt-6 h-11 rounded-sm px-5 font-mono text-xs uppercase"
            >
              {visible ? <>Close {title} <X /></> : <>Play {title} <ChevronDown /></>}
            </Button>
          </div>

          {visible ? (
            <div id={panelId} className="page-reveal mt-6 border border-border bg-card" aria-label={`${title}, embedded`}>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                <p className="font-display font-extrabold">{title}</p>
                <a href={url} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 font-mono text-[10px] uppercase">
                  Open separately <ArrowUpRight className="size-3.5" />
                </a>
              </div>
              <iframe
                src={url}
                title={title}
                loading="lazy"
                className="h-[75vh] min-h-[600px] w-full bg-background"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageIntro eyebrow="Projects" background={projectsBg} title={<>Built to learn<br /><span className="font-body font-normal italic text-muted-foreground">by shipping.</span></>}>
        I&apos;m currently taking AI Ops, and I&apos;ll be doing AI Labs while at Kellogg—I&apos;m excited to merge strategy with technology and AI in a professional role. A couple of things I&apos;ve built along the way, below.
      </PageIntro>

      <section className="border-b border-border py-10 sm:py-12">
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 font-mono text-xs uppercase">
          See what&apos;s new on LinkedIn <ArrowUpRight className="size-4" />
        </a>
      </section>

      <GameEmbed
        eyebrow="Turn-based RPG"
        title="Mahery"
        description="A Sonny 2-style turn-based RPG I designed and built end to end—six chapters, eleven possible animal companions, and a full combat and progression system."
        note="Single-player, runs right in the frame below—no download."
        url="https://mahery.onrender.com/"
      />

      <GameEmbed
        eyebrow="Party game"
        title="Barnyard Dice"
        description="A multiplayer party dice game with four different modes—built to play with a group, each person joining from their own phone."
        note="This one needs other players to actually play a round—open it, create a room, and share the link or QR code with people nearby. It's hosted on a free server that naps when idle, so the first load after a quiet stretch can take 30–60 seconds to wake up."
        url="https://barnyard-dice.onrender.com/"
      />
    </main>
  );
}
