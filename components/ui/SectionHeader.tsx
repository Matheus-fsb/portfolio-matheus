import { ReactNode } from "react";
import Tag from "@/components/Tag";

interface SectionHeaderProps {
  tagNumber: string;
  tagTitle: string;
  tagIcon?: ReactNode;
  titlePrefix: string;
  highlightedTitle: string;
  gradientVariant?: "purple-cyan" | "blue-cyan" | "blue-indigo";
  subtitle: string;
  className?: string;
}

const GRADIENT_CLASSES: Record<"purple-cyan" | "blue-cyan" | "blue-indigo", string> = {
  "purple-cyan":
    "text-transparent bg-clip-text bg-gradient-to-r bg-linear-to-r from-purple-400 to-cyan-400",
  "blue-cyan":
    "text-transparent bg-clip-text bg-gradient-to-r bg-linear-to-r from-blue-400 to-cyan-400",
  "blue-indigo":
    "text-transparent bg-clip-text bg-gradient-to-r bg-linear-to-r from-blue-400 to-indigo-400",
};

export default function SectionHeader({
  tagNumber,
  tagTitle,
  tagIcon,
  titlePrefix,
  highlightedTitle,
  gradientVariant = "purple-cyan",
  subtitle,
  className = "mb-8",
}: SectionHeaderProps) {
  const gradientClass = GRADIENT_CLASSES[gradientVariant] || GRADIENT_CLASSES["purple-cyan"];

  return (
    <div className={`flex flex-col items-center md:items-start ${className}`}>
      <Tag title={`${tagNumber} // ${tagTitle}`} icon={tagIcon} />
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
        {titlePrefix} <span className={gradientClass}>{highlightedTitle}</span>
      </h2>
      <p className="text-xs sm:text-sm font-mono text-zinc-500 mt-1">
        {subtitle}
      </p>
    </div>
  );
}
