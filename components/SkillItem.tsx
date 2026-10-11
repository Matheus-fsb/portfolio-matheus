import { SkillItemData } from "@/types/skill";

interface SkillItemProps {
  item: SkillItemData;
}

export default function SkillItem({ item }: SkillItemProps) {
  return (
    <div className="group p-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/50 hover:border-blue-500/40 hover:bg-zinc-900/60 transition-all flex items-center justify-between">
      <div>
        <p className="font-mono text-sm text-zinc-200 font-semibold group-hover:text-blue-400 transition-colors">
          {item.name}
        </p>
        <p className="text-xs text-zinc-500 mt-0.5 font-sans">
          {item.desc}
        </p>
      </div>

      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/40 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
        {item.level}
      </span>
    </div>
  );
}