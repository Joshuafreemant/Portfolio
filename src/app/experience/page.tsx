import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui";
import { experience } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience — Tolulope Joshua Akinniyi",
  description: "Professional experience and engineering contributions of Tolulope Joshua Akinniyi.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-12">
      <Section eyebrow="Experience" title="Professional timeline">
        <ol className="relative border-l border-[var(--border)] pl-8">
          {experience.map((entry) => (
            <li key={entry.company} className="mb-14 last:mb-0">
              <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              <p className="mono-label text-xs text-[var(--text-muted)]">
                {entry.period} · {entry.location}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                {entry.role}
                {entry.current && (
                  <span className="mono-label ml-3 rounded-full border border-[var(--accent)] bg-[var(--accent-dim)] px-2 py-0.5 text-[10px] uppercase text-[var(--accent)]">
                    Current
                  </span>
                )}
              </h3>
              <p className="text-[var(--text-secondary)]">{entry.company}</p>
              <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)]">{entry.summary}</p>
              <ul className="mt-4 space-y-2">
                {entry.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--text-muted)]" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
