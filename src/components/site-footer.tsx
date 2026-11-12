import { Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-4 px-6 text-sm text-[var(--text-muted)] md:flex-row md:items-center">
        <p className="mono-label text-xs">
          © 2026 {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-[var(--accent)]"
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-[var(--accent)]"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[var(--accent)]"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
