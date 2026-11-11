export function Section({
  index,
  eyebrow,
  title,
  description,
  children,
  id,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-heading` : undefined} className="py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <p className="mono-label text-xs uppercase text-[var(--text-muted)]">
          {index ? `${index} / ` : ""}
          {eyebrow}
        </p>
        <h2 id={id ? `${id}-heading` : undefined} className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
          {title}
        </h2>
        {description && <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">{description}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
