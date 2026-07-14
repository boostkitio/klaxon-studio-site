export default function Stat({
  value,
  label,
  period = true,
}: {
  value: string;
  label: string;
  period?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-display font-[var(--kx-dw,700)] text-[clamp(34px,4.5vw,58px)] leading-none tracking-[-0.03em]">
        {value}
        {period && <span className="text-[var(--brand)]">.</span>}
      </span>
      <span className="font-mono font-medium text-[11px] tracking-[0.12em] uppercase text-[var(--text-secondary)]">
        {label}
      </span>
    </div>
  );
}
