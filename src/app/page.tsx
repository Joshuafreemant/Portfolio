import { ArrowRight, Download, ExternalLink, MapPin } from "lucide-react";
import { Section } from "@/components/section";
import { Badge, Card, PrimaryButton, SecondaryButton } from "@/components/ui";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { skills } from "@/content/skills";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const current = experience.filter((e) => e.current);

  return (
    <>
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="mono-label text-xs uppercase tracking-widest text-[var(--text-muted)]">
            {profile.tagline}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[var(--text-secondary)] md:text-lg">
            {profile.summary}
          </p>
          <div className="mono-label mt-6 flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <MapPin size={14} strokeWidth={1.5} />
            {profile.location} · {profile.availability}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href="/work" icon={ArrowRight}>
              View work
            </PrimaryButton>
            <SecondaryButton href="/resume.pdf" icon={Download}>
              Resume
            </SecondaryButton>
          </div>
        </div>
      </section>

      <Section index="01" eyebrow="Currently" title="What I'm working on" id="currently">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {current.map((entry) => (
            <Card key={entry.company}>
              <p className="mono-label text-xs text-[var(--accent)]">{entry.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{entry.role}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{entry.company}</p>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{entry.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        index="02"
        eyebrow="Selected Work"
        title="Products I've built and led"
        description="A few of the platforms I've shipped and the engineering decisions behind them."
        id="work"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <Card key={project.slug}>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{project.name}</h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    <ExternalLink size={16} strokeWidth={1.5} />
                  </a>
                )}
              </div>
              <p className="mono-label mt-1 text-xs text-[var(--text-muted)]">{project.role}</p>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <SecondaryButton href="/work" icon={ArrowRight}>
            See all projects
          </SecondaryButton>
        </div>
      </Section>

      <Section
        index="03"
        eyebrow="Technical Expertise"
        title="How I'm equipped to build"
        id="skills"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mono-label text-xs uppercase text-[var(--text-muted)]">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        index="04"
        eyebrow="Get in touch"
        title="Let's build something reliable"
        description="Open to remote, hybrid and relocation opportunities — backend engineering, technical leadership, payment systems and scalable business applications."
        id="cta"
      >
        <PrimaryButton href="/contact" icon={ArrowRight}>
          Contact me
        </PrimaryButton>
      </Section>
    </>
  );
}
