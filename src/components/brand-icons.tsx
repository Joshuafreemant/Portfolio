// Brand marks (GitHub, LinkedIn) aren't in lucide-react — these are the one
// exception to the Lucide-only icon rule, since they're logos, not functional icons.
// Sized and weighted to sit visually alongside Lucide's 1.5 stroke icons.

export function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.03 3.26 9.3 7.78 10.8.57.1.78-.25.78-.55v-2.1c-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.5-1.44.11-3 0 0 .96-.31 3.13 1.17a10.9 10.9 0 0 1 5.7 0c2.17-1.48 3.13-1.17 3.13-1.17.61 1.56.23 2.71.11 3 .73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.33-5.21 5.62.41.36.78 1.07.78 2.15v3.19c0 .3.2.66.79.55A11.52 11.52 0 0 0 23.5 12c0-6.3-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.98h8.96V23.5H.5V8.98Zm15.02-.28c-2.2 0-3.68 1.2-4.28 2.34h-.06V8.98H2.5V23.5h8.96v-7.2c0-1.9.36-3.73 2.71-3.73 2.33 0 2.36 2.17 2.36 3.85v7.08H24v-7.95c0-5.03-1.08-8.85-6.48-8.85Z" />
    </svg>
  );
}
