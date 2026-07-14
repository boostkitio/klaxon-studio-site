export default function Label({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "on-dark" | "on-brand";
}) {
  const color =
    tone === "on-dark"
      ? "text-white/78"
      : tone === "on-brand"
        ? "text-white/85"
        : "text-[var(--text-muted)]";
  // The tick is always brand coral, except when the section itself is
  // coral (on-brand), where a coral tick would be invisible so it's white.
  const tick = tone === "on-brand" ? "bg-white" : "bg-[var(--brand)]";

  return (
    <span className={`inline-flex items-center gap-[11px] font-mono font-medium text-[11px] tracking-[0.12em] uppercase ${color}`}>
      <span className={`w-[4px] h-[1em] ${tick}`} />
      {children}
    </span>
  );
}
