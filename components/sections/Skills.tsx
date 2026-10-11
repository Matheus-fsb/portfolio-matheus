"use client";

import { Cpu } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillItem from "@/components/SkillItem";
import { SKILLS_DATA } from "@/constants/skills";

export default function Skills() {
  return (
    <section id="skills" className="w-full text-zinc-300 scroll-mt-24 py-10">
      {/* Header */}
      <SectionHeader
        tagNumber="03"
        tagTitle="Habilidades"
        tagIcon={<Cpu size={14} />}
        titlePrefix="Habilidades &"
        highlightedTitle="Stack Técnica"
        subtitle="Ferramentas, linguagens e conceitos aplicados no dia a dia"
        className="mb-12"
      />

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS_DATA.map((cat) => (
          <div
            key={cat.title}
            className="rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl p-6 sm:p-8 hover:border-zinc-700 transition duration-300 shadow-xl"
          >
            {/* Header of category */}
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                {cat.title}
              </h3>
            </div>

            {/* List of items */}
            <div className="space-y-3">
              {cat.items.map((item) => (
                <SkillItem key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
