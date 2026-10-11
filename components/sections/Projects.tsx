"use client";

import { useState } from "react";
import { FolderGit2, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { ProjectCategory } from "@/types/project";
import { PROJECTS_DATA } from "@/constants/projects";
import { getProjectCategories, filterProjectsByCategory } from "@/lib/projects/filterProjects";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const categories = getProjectCategories(PROJECTS_DATA);
  const filteredProjects = filterProjectsByCategory(PROJECTS_DATA, filter);

  return (
    <section id="projetos" className="w-full text-zinc-300 scroll-mt-24 py-10">
      {/* Section Header */}
      <SectionHeader
        tagNumber="02"
        tagTitle="Projetos"
        tagIcon={<FolderGit2 size={14} />}
        titlePrefix="Projetos em"
        highlightedTitle="Destaque"
        subtitle="Aplicações práticas, arquitetura backend e soluções computacionais"
      />

      {/* Filter Tabs Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-8 gap-4">
        {/* Horizontal scrollable tab buttons */}
        <div className="overflow-x-auto py-1 flex items-center gap-1.5 p-1 rounded-xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold shadow-sm shadow-blue-500/25"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Counter Info */}
        <span className="hidden sm:inline-block text-xs font-mono text-zinc-500 whitespace-nowrap">
          {filteredProjects.length} de {PROJECTS_DATA.length} projetos
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <GlassCard
            key={project.id}
            hoverEffect
            className="group p-6 sm:p-7 flex flex-col justify-between"
          >
            {/* Top row */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-xs font-mono text-zinc-400 truncate">
                    {project.subtitle}
                  </span>
                </div>
                {project.status === "finalizado" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-[10px] font-mono text-green-400 flex-shrink-0">
                    <Sparkles size={11} /> Finalizado
                  </span>
                )}

                {project.status === "em_andamento" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono text-blue-400 flex-shrink-0">
                    <Sparkles size={11} /> Em Andamento
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans text-justify">
                {project.description}
              </p>
            </div>

            {/* Bottom row: tags & action buttons */}
            <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 font-mono text-[11px] border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800 flex items-center justify-center cursor-pointer"
                  title="Ver código no GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 font-mono text-xs font-semibold border border-blue-500/30 transition-colors"
                  >
                    <span>Ver</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
