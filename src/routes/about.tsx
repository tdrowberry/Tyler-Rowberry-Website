import { createFileRoute } from "@tanstack/react-router";

import lemurAsset from "../assets/tyler-lemur.jpg.asset.json";
import innovationAsset from "../assets/strategy-innovation-studio.jpeg.asset.json";
import { PageIntro } from "../components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tyler Rowberry" },
      { name: "description", content: "About Tyler Rowberry: Kellogg MBA candidate, strategist, global traveler, social impact advocate, and ballroom dancer." },
      { property: "og:title", content: "About — Tyler Rowberry" },
      { property: "og:description", content: "The experiences and interests behind Tyler Rowberry's approach to strategy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageIntro eyebrow="03 / Beyond the résumé" title={<>Globally curious.<br /><span className="font-body font-normal italic text-muted-foreground">Grounded in service.</span></>}>
        My approach to strategy has been shaped as much by listening across cultures as by models, frameworks, and boardroom conversations.
      </PageIntro>

      <section className="grid gap-14 border-b border-border py-20 sm:py-24 md:grid-cols-12">
        <figure className="md:col-span-5">
          <img src={lemurAsset.url} alt="Golden lemur in Madagascar foliage" className="aspect-[4/5] w-full rounded-sm object-cover" />
          <figcaption className="mt-3 font-mono text-[9px] uppercase text-muted-foreground">A nod to Madagascar, and a reminder to stay curious.</figcaption>
        </figure>
        <div className="space-y-7 text-lg leading-relaxed md:col-span-7 md:pt-10">
          <p>I spent two years serving as a volunteer missionary in Madagascar and Zambia. That experience sharpened my ability to listen, adapt, and build trust across unfamiliar contexts.</p>
          <p>Since then, my work has taken me from healthcare and industrial diligence in the United States to the operational realities of opening an office in Saudi Arabia. I&apos;ve also lived or worked in the United Kingdom and United Arab Emirates.</p>
          <p className="border-l-2 border-accent pl-6 font-body italic text-muted-foreground">“Aleo very tsikalakalam-bola, toy izay very tsikalakalam-pihavanana.”</p>
          <p className="font-mono text-[10px] uppercase text-muted-foreground">A Malagasy proverb about valuing relationships over material loss</p>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="relative isolate min-h-[420px] overflow-hidden rounded-sm sm:min-h-[520px]">
          <img src={innovationAsset.url} alt="Illustrated innovation studio with teams exploring strategy, markets, and product ideas" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-foreground/55" />
          <div className="relative flex min-h-[420px] max-w-xl flex-col justify-end p-8 text-background sm:min-h-[520px] sm:p-12">
            <p className="font-mono text-[10px] uppercase text-background/70">How I like to work</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Make the complex discussable.</h2>
            <p className="mt-6 text-lg leading-relaxed text-background/80">Good strategy creates a shared picture of the problem, invites different perspectives, and gives a team a practical path from insight to action.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-16 py-20 sm:py-24 md:grid-cols-2">
        <div>
          <p className="font-mono text-[10px] uppercase text-accent">Education</p>
          <div className="mt-8 space-y-8">
            <div><h2 className="font-display text-2xl font-extrabold">Kellogg School of Management</h2><p className="mt-2 text-muted-foreground">MBA candidate, Strategy & Finance · June 2027</p></div>
            <div><h2 className="font-display text-2xl font-extrabold">Brigham Young University</h2><p className="mt-2 text-muted-foreground">B.S. Strategic Management · Nonprofit Management minor · 3.8 GPA</p></div>
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase text-accent">Outside the brief</p>
          <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
            <div className="flex justify-between gap-8 py-4"><dt className="font-display font-bold">Languages</dt><dd className="text-right text-muted-foreground">English · Malagasy</dd></div>
            <div className="flex justify-between gap-8 py-4"><dt className="font-display font-bold">Certifications</dt><dd className="text-right text-muted-foreground">Prosci · Alteryx</dd></div>
            <div className="flex justify-between gap-8 py-4"><dt className="font-display font-bold">Recognition</dt><dd className="text-right text-muted-foreground">Ballard Scholar · Eagle Scout</dd></div>
            <div className="flex justify-between gap-8 py-4"><dt className="font-display font-bold">Movement</dt><dd className="text-right text-muted-foreground">U.S. National Ballroom Dance Championship finalist</dd></div>
          </dl>
        </div>
      </section>
    </main>
  );
}