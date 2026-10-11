"use client";

import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { HOBBIES_DATA } from "@/constants/hobbies";
import { useCarousel } from "@/hooks/useCarousel";

export default function HobbiesCarousel() {
  const { currentIndex, prevSlide, nextSlide, goToSlide } = useCarousel(HOBBIES_DATA.length);

  return (
    <div className="w-full mt-24">
      {/* Header with Navigation Arrows */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Extra <span className="text-blue-400">Código</span>
            </h3>
            <p className="text-xs font-mono text-zinc-500">
              Hobbies e interesses criativos ({currentIndex + 1} de {HOBBIES_DATA.length})
            </p>
          </div>
        </div>

        {/* Carousel Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Hobby anterior"
            className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Próximo hobby"
            className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Featured Single / Multi-Card View */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % HOBBIES_DATA.length;
            const hobby = HOBBIES_DATA[index];
            const isPrimary = offset === 0;

            return (
              <div
                key={hobby.id}
                className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${hobby.color} to-zinc-950/70 border border-zinc-800/80 ${
                  hobby.borderColor
                } transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col justify-between ${
                  offset === 2 ? "hidden lg:flex" : offset === 1 ? "hidden md:flex" : "flex"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl border border-zinc-800 flex items-center justify-center">
                      {hobby.icon}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full text-zinc-400 border border-zinc-800">
                      {hobby.tag}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white font-mono mb-2">
                    {hobby.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    {hobby.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-600">
                  <span>hobby #{index + 1}</span>
                  {isPrimary && <span className="text-blue-400">● em foco</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {HOBBIES_DATA.map((h, i) => (
          <button
            key={h.id}
            onClick={() => goToSlide(i)}
            aria-label={`Ir para ${h.title}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === i
                ? "w-8 h-2 bg-blue-500"
                : "w-2 h-2 bg-zinc-800 hover:bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
