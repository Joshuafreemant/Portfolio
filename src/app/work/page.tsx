import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/section";
import { Badge, Card } from "@/components/ui";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work — Tolulope Joshua Akinniyi",
  description: "Products and platforms built and led by Tolulope Joshua Akinniyi.",
};

export default function WorkPage() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <div className="pt-12">
      <Section eyebrow="Work" title="Selected projects" description="Platforms I've built, led, or contributed to.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <Card key={project.slug}>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{project.name}</h3>
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
              <p className="mt-4 text-sm text-[var(--text-secondary)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <h3 className="mono-label mt-16 text-xs uppercase text-[var(--text-muted)]">Other projects</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {other.map((project) => (
            <div key={project.slug} className="rounded-[10px] border border-[var(--border)] p-5">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-medium text-[var(--text-primary)]">{project.name}</h4>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    <ExternalLink size={14} strokeWidth={1.5} />
                  </a>
                )}
              </div>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
