import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui";
import { profile } from "@/content/profile";
import { mlLearning } from "@/content/learning";

export const metadata: Metadata = {
  title: "About — Tolulope Joshua Akinniyi",
  description: "About Tolulope Joshua Akinniyi, software architect and backend engineer.",
};

export default function AboutPage() {
  return (
    <div className="pt-12">
      <Section eyebrow="About" title="How I work">
        <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="max-w-[720px] space-y-5 text-[var(--text-secondary)]">
          <p>{profile.summary}</p>
          <p>
            I lead engineering on Corenotes, a multi-tenant healthcare care-management platform, and
            build backend systems for TPay, a Nigerian tax-compliance and payments product. Earlier, I
            led the backend team for SchoolExl at Age of AI, building its Laravel and SQL backend.
          </p>
          <p>
            My focus is backend architecture: API design, database schema, third-party integrations and
            production deployment — with enough frontend experience in React and Next.js to work across
            the full stack when a product needs it. I studied Psychology (BSc) at Obafemi Awolowo
            University before moving into software engineering, which shapes how I approach
            requirements gathering and working with stakeholders.
          </p>
          <p>
            I treat AI coding tools the way I&apos;d treat any engineer on the team: useful, fast, and never
            exempt from review. I use Claude Code daily across my own production codebases — this
            portfolio included — which means part of the job now is directing AI-assisted development and
            holding its output to the same bar as anything written by hand: does it match the
            architecture, does it handle the edge cases, is it something I&apos;d actually ship. Writing code
            was never the hard part; owning a system from a blank repo through to real users in
            production is.
          </p>
        </div>
          <div className="flex-shrink-0">
            <div className="h-28 w-28 overflow-hidden rounded-[14px] border border-[var(--border)] shadow-[0_0_0_1px_var(--accent),0_0_28px_var(--accent-glow)] md:h-32 md:w-32">
              <Image
                src="/avatar.png"
                alt={profile.name}
                width={256}
                height={256}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <h3 className="mono-label mt-12 text-xs uppercase text-[var(--text-muted)]">Focus areas</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.focusAreas.map((f) => (
            <Badge key={f}>{f}</Badge>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Applied Learning"
        title="Machine learning & data, self-directed"
        description="Outside of client work, I've spent time building hands-on fluency in the data science stack — working through real datasets end to end rather than just reading theory."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {mlLearning.map((group) => (
            <div key={group.theme}>
              <h4 className="mono-label text-xs uppercase text-[var(--text-muted)]">{group.theme}</h4>
              <ul className="mt-3 space-y-2">
                {group.notebooks.map((n) => (
                  <li key={n} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--text-muted)]" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
