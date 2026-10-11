"use client";

import Image from "next/image";
import HobbiesCarousel from "@/components/HobbiesCarousel";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { PROFILE } from "@/constants/profile";
import { Code2, GraduationCap, Sparkles, MapPin, FileDown } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="w-full text-zinc-300 scroll-mt-24 py-10">
      {/* Header */}
      <SectionHeader
        tagNumber="01"
        tagTitle="Sobre Mim"
        tagIcon={<Sparkles size={14} />}
        titlePrefix="Sobre"
        highlightedTitle="Mim"
        subtitle='<profile status="online" role="software-developer" />'
        className="mb-10"
      />

      {/* Main Grid: Text + Avatar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Bio texts and highlights (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard className="p-6 sm:p-8 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <span>Olá! Eu sou {PROFILE.firstName}</span>
              <span className="inline-block animate-bounce">👋</span>
            </h3>

            <p className="text-zinc-300 leading-relaxed font-sans text-sm sm:text-base text-justify">
              Sou estudante de{" "}
              <span className="text-cyan-400 font-semibold">{PROFILE.bio.course}</span> na{" "}
              <span className="text-white font-medium">{PROFILE.bio.academicInstitution}</span> e desenvolvedor com formação técnica em{" "}
              <span className="text-blue-400 font-medium">{PROFILE.bio.technicalCourse} pelo {PROFILE.bio.technicalInstitution}</span>.
            </p>

            <p className="text-zinc-400 leading-relaxed font-sans text-sm sm:text-base text-justify">
              Minha maior motivação é entender como a computação funciona por trás do código: desde algoritmos eficientes e estrutura de dados até a arquitetura de sistemas distribuídos, modelagem de bancos de dados relacionais e APIs escaláveis.
            </p>

            <p className="text-zinc-400 leading-relaxed font-sans text-sm sm:text-base text-justify">
              Procuro constantemente transformar o conhecimento teórico em soluções reais, com código limpo, testável e manutenível.
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="badge-mono">
                <MapPin size={13} className="text-rose-400" />
                {PROFILE.location}
              </span>
              <span className="badge-mono">
                <GraduationCap size={13} className="text-cyan-400" />
                {PROFILE.bio.degrees}
              </span>
              <span className="badge-mono">
                <Code2 size={13} className="text-blue-400" />
                {PROFILE.bio.specialty}
              </span>
            </div>

            {/* Download CV Action */}
            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">Documento profissional:</span>
              <a
                href={PROFILE.cv.path}
                download={PROFILE.cv.filename}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 text-xs font-mono font-semibold transition hover:scale-105 cursor-pointer shadow-sm"
              >
                <FileDown size={14} />
                <span>Baixar Currículo (PDF)</span>
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Right: Avatar and Profile Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative group w-full max-w-sm">
            {/* Subtle Glow Halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-purple-600/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-80 transition duration-700" />

            {/* Profile Frame */}
            <div className="relative rounded-[2.2rem] bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-6 border border-zinc-800/80 shadow-2xl backdrop-blur-md flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-xl group-hover:scale-102 transition duration-500">
                <Image
                  src="/images/eu.png"
                  alt={PROFILE.name}
                  width={300}
                  height={300}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {PROFILE.firstName} <span className="text-blue-400 font-light">{PROFILE.lastName}</span>
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  {PROFILE.role}
                </p>
              </div>

              {/* Status footer inside card */}
              <div className="w-full mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {PROFILE.status}
                </span>
                <span className="text-zinc-500">{PROFILE.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carrossel de Hobbies */}
      <HobbiesCarousel />
    </section>
  );
}
