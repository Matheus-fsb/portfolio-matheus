import { Calendar, MapPin } from "lucide-react";
import { TimelineStepData } from "@/types/timeline";

interface TimelineItemProps {
  step: TimelineStepData;
}

export default function TimelineItem({ step }: TimelineItemProps) {
  return (
    <div className="relative group">
      {/* Timeline Node Point */}
      <div className="absolute -left-[30px] sm:-left-[39px] top-5 w-5 h-5 rounded-full bg-zinc-950 border-2 border-blue-400 group-hover:border-cyan-300 group-hover:scale-125 transition-all duration-300 shadow-md shadow-blue-500/50 flex items-center justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-cyan-300" />
      </div>

      {/* Timeline Card */}
      <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl p-6 sm:p-8 hover:border-blue-500/40 transition duration-300 shadow-xl group-hover:-translate-y-0.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center flex-shrink-0">
              {step.icon}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm font-semibold text-zinc-300 mt-0.5">
                {step.institution}
              </p>
            </div>
          </div>

          <span
            className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono border ${step.badgeColor}`}
          >
            {step.badge}
          </span>
        </div>

        {/* Meta details: period and location */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-blue-400" />
            {step.period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-zinc-500" />
            {step.location}
          </span>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed font-sans mb-5">
          {step.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800/70">
          {step.highlights.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 rounded-lg bg-zinc-950/60 text-zinc-300 text-xs font-mono border border-zinc-800"
            >
              ✓ {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}