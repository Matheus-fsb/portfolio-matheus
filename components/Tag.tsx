import { ReactNode } from "react";

interface TagProps {
  title: string;
  icon?: ReactNode;
}

export default function Tag({ title, icon }: TagProps) {
  return (
    <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 backdrop-blur-md rounded-full px-3.5 py-1 text-xs font-mono text-blue-300 shadow-sm shadow-blue-500/10">
      {icon ? (
        <span className="text-blue-400">{icon}</span>
      ) : (
        <span className="text-cyan-400 font-bold">{`>`}</span>
      )}
      <span className="tracking-wide uppercase font-semibold">{title}</span>
    </div>
  );
}