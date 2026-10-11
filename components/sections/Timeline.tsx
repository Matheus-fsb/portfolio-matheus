"use client";

import { GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/TimelineItem";
import { TIMELINE_DATA } from "@/constants/timeline";

export default function Timeline() {
  return (
    <section id="jornada" className="w-full text-zinc-300 scroll-mt-24 py-10">
      {/* Header */}
      <SectionHeader
        tagNumber="04"
        tagTitle="Jornada"
        tagIcon={<GraduationCap size={14} />}
        titlePrefix="Minha"
        highlightedTitle="Jornada"
        gradientVariant="blue-indigo"
        subtitle="Trajetória acadêmica e marcos de aprendizado em tecnologia"
        className="mb-12"
      />

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-10 space-y-10">
        {/* Continuous Neon Vertical Line */}
        <div className="absolute left-[11px] sm:left-[10px] top-6 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500/60 to-purple-900/30" />

        {TIMELINE_DATA.map((step, idx) => (
          <TimelineItem key={step.title + idx} step={step} />
        ))}
      </div>
    </section>
  );
}
