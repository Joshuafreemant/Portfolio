import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export const metadata: Metadata = {
  title: "Contact — Tolulope Joshua Akinniyi",
  description: "Get in touch with Tolulope Joshua Akinniyi.",
};

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: <Mail size={18} strokeWidth={1.5} /> },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: <Phone size={18} strokeWidth={1.5} /> },
  { label: "GitHub", href: profile.github, icon: <GithubIcon size={18} /> },
  { label: "LinkedIn", href: "#", icon: <LinkedinIcon size={18} /> },
];

export default function ContactPage() {
  return (
    <div className="pt-12">
      <Section
        eyebrow="Contact"
        title="Let's talk"
        description="Open to remote, hybrid and relocation opportunities. Reach out directly — no forms."
      >
        <div className="flex max-w-md flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-[10px] border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-4 text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
            >
              <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)]">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
