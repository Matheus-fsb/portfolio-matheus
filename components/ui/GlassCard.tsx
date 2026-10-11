import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = false,
}: GlassCardProps) {
  const hoverClass = hoverEffect
    ? "hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20 transition-all duration-300"
    : "";

  return (
    <div
      className={`rounded-3xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md shadow-lg ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
