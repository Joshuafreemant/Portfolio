import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export function Badge({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={`mono-label inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${
        active
          ? "border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent)]"
          : "border-[var(--border)] bg-[var(--bg-overlay)] text-[var(--text-secondary)]"
      }`}
    >
      {children}
    </span>
  );
}

export function PrimaryButton({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-[8px] bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-contrast)] transition-all hover:bg-[var(--accent-strong)] hover:shadow-[0_0_0_1px_var(--accent),0_0_24px_var(--accent-glow)]"
    >
      {children}
      {Icon && <Icon size={16} strokeWidth={1.5} />}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {children}
      {Icon && <Icon size={16} strokeWidth={1.5} />}
    </Link>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[10px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_var(--accent),0_0_24px_var(--accent-glow)] ${className}`}
    >
      {children}
    </div>
  );
}
