"use client";

import { Mail, Copy, Check, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROFILE } from "@/constants/profile";
import { useClipboard } from "@/hooks/useClipboard";

export default function Contact() {
  const { copied, copy } = useClipboard(2500);

  const handleCopyEmail = () => {
    copy(PROFILE.contacts.email);
  };

  return (
    <section id="contato" className="w-full text-zinc-300 scroll-mt-24 py-10">
      {/* Header */}
      <SectionHeader
        tagNumber="05"
        tagTitle="Contato"
        tagIcon={<Mail size={14} />}
        titlePrefix="Entre em"
        highlightedTitle="Contato"
        subtitle="Aberto para oportunidades profissionais, projetos e conexões na área tech"
        className="mb-8"
      />

      <div>
        {/* Direct Channels Card */}
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare size={18} className="text-blue-400" />
              <span>Canais Diretos</span>
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              Tem uma proposta, projeto ou quer apenas trocar uma ideia sobre tecnologia e ciência da computação? Fique à vontade para me contatar.
            </p>

            {/* Copy email card */}
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">E-mail Principal</p>
                <p className="text-xs sm:text-sm font-mono text-zinc-200 truncate font-semibold mt-0.5">
                  {PROFILE.contacts.email}
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                title="Copiar endereço de e-mail"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Social channels */}
            <div className="space-y-3 pt-2">
              <a
                href={PROFILE.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-2xl bg-zinc-950/50 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900/60 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-zinc-200 font-semibold group-hover:text-blue-400 transition-colors">
                      GitHub
                    </p>
                    <p className="text-xs text-zinc-500 font-sans">
                      Repositórios e contribuições de código
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href={PROFILE.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-2xl bg-zinc-950/50 border border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-900/60 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-zinc-200 font-semibold group-hover:text-cyan-400 transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-xs text-zinc-500 font-sans">
                      Conexão profissional e networking
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
