import { createFileRoute } from "@tanstack/react-router";

import aboutBg from "../assets/backgrounds/about-bg.jpg";
import headshot from "../assets/photos/tyler-professional-headshot.jpg";
import withChild from "../assets/photos/tyler-with-child.jpg";
import missionaryGroup from "../assets/photos/madagascar-missionary-group.jpg";
import operationSmile from "../assets/photos/operation-smile-madagascar.jpg";
import innovationPhoto from "../assets/photos/strategy-innovation-studio.jpeg";
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
      <PageIntro eyebrow="Beyond the resume" background={aboutBg} title={<>Globally curious.<br /><span className="font-body font-normal italic text-muted-foreground">Grounded in service.</span></>}>
        My approach to strategy has been shaped as much by listening across cultures as by models, frameworks, and boardroom conversations.
      </PageIntro>

      <section className="grid gap-10 border-b border-border py-14 sm:py-20 md:grid-cols-12">
        <div className="md:col-span-5 md:self-start">
          <div className="grid grid-cols-2 gap-3">
            <figure>
              <img src={headshot} alt="Tyler Rowberry" className="aspect-[4/5] w-full rounded-sm object-cover object-[50%_15%]" />
            </figure>
            <figure>
              <img src={withChild} alt="Tyler Rowberry with one of his four children" className="aspect-[4/5] w-full rounded-sm object-cover" />
              <figcaption className="mt-3 font-mono text-[9px] uppercase text-muted-foreground">Dad to four.</figcaption>
            </figure>
          </div>
          <figure className="mt-3">
            <img src={missionaryGroup} alt="Tyler Rowberry with fellow missionaries and local church members in Madagascar" className="aspect-[16/9] w-full rounded-sm object-cover" />
            <figcaption className="mt-3 font-mono text-[9px] uppercase text-muted-foreground">Serving as a missionary in Madagascar.</figcaption>
          </figure>
        </div>
        <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:pt-6">
          <p>I spent two years serving as a volunteer missionary in Madagascar and Zambia. That experience sharpened my ability to listen, adapt, and build trust across unfamiliar contexts.</p>
          <p>Since then, my work has taken me from healthcare and industrial diligence in the United States to the operational realities of opening an office in Saudi Arabia. I&apos;ve also lived or worked in the United Kingdom and United Arab Emirates.</p>
          <p>Closer to home, I&apos;m a dad to four kids—easily my favorite role.</p>
          <p className="border-l-2 border-accent pl-6 font-body italic text-muted-foreground">"Aleo very tsikalakalam-bola, toy izay very tsikalakalam-pihavanana."</p>
          <p className="font-mono text-[10px] uppercase text-muted-foreground">A Malagasy proverb about valuing relationships over material loss</p>
        </div>
      </section>

      <section className="grid gap-10 border-b border-border py-14 sm:py-20 md:grid-cols-2">
        <div>
          <p className="font-mono text-[10px] uppercase text-accent">Social impact</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold">Operation Smile</h2>
          <figure className="mt-5">
            <img
              src={operationSmile}
              alt="Tyler Rowberry translating for a patient and family member during an Operation Smile surgical outreach in Madagascar"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          </figure>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            While serving in Madagascar, I volunteered as a translator for Operation Smile, a nonprofit providing free cleft lip and palate surgery to patients who couldn&apos;t otherwise access it.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase text-accent">On video</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold">Elevatus Foundation</h2>
          <div className="mt-5 aspect-video overflow-hidden rounded-sm border border-border bg-card">
            <iframe
              src="https://www.youtube.com/embed/ZHwb96BGAIg"
              title="Stella's story — Elevatus Foundation"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="size-full"
            />
          </div>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            &ldquo;Stella&apos;s story,&rdquo; a short film for the Elevatus Foundation that I directed and narrate—that&apos;s me talking with Stella. Filmed by my sister, Sasha Wilkins. One example of the social impact and nonprofit work I&apos;ve supported beyond my mission.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-14 sm:py-20">
        <div className="relative isolate min-h-[360px] overflow-hidden rounded-sm sm:min-h-[440px]">
          <img src={innovationPhoto} alt="Illustrated innovation studio with teams exploring strategy, markets, and product ideas" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-foreground/55" />
          <div className="relative flex min-h-[360px] max-w-xl flex-col justify-end p-6 text-background sm:min-h-[440px] sm:p-9">
            <p className="font-mono text-[10px] uppercase text-background/70">How I like to work</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Make the complex discussable.</h2>
            <p className="mt-4 text-lg leading-relaxed text-background/80">Good strategy creates a shared picture of the problem, invites different perspectives, and gives a team a practical path from insight to action.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 py-14 sm:py-20 md:grid-cols-2">
        <div>
          <p className="font-mono text-[10px] uppercase text-accent">Education</p>
          <div className="mt-6 space-y-6">
            <div><h2 className="font-display text-2xl font-extrabold">Kellogg School of Management</h2><p className="mt-2 text-muted-foreground">MBA candidate, Strategy & Finance · June 2027</p></div>
            <div><h2 className="font-display text-2xl font-extrabold">Brigham Young University</h2><p className="mt-2 text-muted-foreground">B.S. Strategic Management · Nonprofit Management minor · 3.8 GPA</p></div>
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase text-accent">Outside the brief</p>
          <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
            <div className="flex justify-between gap-8 py-3"><dt className="font-display font-bold">Languages</dt><dd className="text-right text-muted-foreground">English · Malagasy</dd></div>
            <div className="flex justify-between gap-8 py-3"><dt className="font-display font-bold">Certifications</dt><dd className="text-right text-muted-foreground">Prosci · Alteryx</dd></div>
            <div className="flex justify-between gap-8 py-3"><dt className="font-display font-bold">Recognition</dt><dd className="text-right text-muted-foreground">Ballard Scholar · Eagle Scout</dd></div>
            <div className="flex justify-between gap-8 py-3"><dt className="font-display font-bold">Movement</dt><dd className="text-right text-muted-foreground">U.S. National Ballroom Dance Championship finalist</dd></div>
          </dl>
        </div>
      </section>
    </main>
  );
}
