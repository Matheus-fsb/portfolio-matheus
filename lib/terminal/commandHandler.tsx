import { ReactNode } from "react";
import { FileDown } from "lucide-react";
import { SectionKey } from "@/types/navigation";
import { PROFILE } from "@/constants/profile";
import { downloadCV } from "@/lib/utils/downloadCV";

export interface CommandExecutionResult {
  output?: ReactNode;
  clearRequested?: boolean;
}

export function executeTerminalCommand(
  rawCmd: string,
  onSelectSection?: (section: SectionKey | null) => void,
  onHelpClick?: () => void
): CommandExecutionResult {
  const cmd = rawCmd.trim().toLowerCase();
  if (!cmd) return {};

  switch (cmd) {
    case "1":
    case "sobre":
    case "about":
    case "sobre mim":
      onSelectSection?.("sobre");
      return {
        output: (
          <div className="space-y-1 text-zinc-300">
            <p className="text-blue-400 font-semibold">📍 Seção [Sobre Mim] carregada na tela.</p>
          </div>
        ),
      };

    case "2":
    case "projetos":
    case "projects":
      onSelectSection?.("projetos");
      return {
        output: (
          <div className="space-y-1 text-zinc-300">
            <p className="text-cyan-400 font-semibold">📍 Seção [Projetos] carregada na tela.</p>
          </div>
        ),
      };

    case "3":
    case "skills":
    case "habilidades":
    case "stack":
      onSelectSection?.("skills");
      return {
        output: (
          <div className="space-y-1 text-zinc-300">
            <p className="text-purple-400 font-semibold">📍 Seção [Habilidades] carregada na tela.</p>
          </div>
        ),
      };

    case "4":
    case "jornada":
    case "educacao":
    case "timeline":
      onSelectSection?.("jornada");
      return {
        output: (
          <div className="space-y-1 text-zinc-300">
            <p className="text-emerald-400 font-semibold">📍 Seção [Minha Jornada] carregada na tela.</p>
          </div>
        ),
      };

    case "5":
    case "contato":
    case "contact":
    case "email":
      onSelectSection?.("contato");
      return {
        output: (
          <div className="space-y-1 text-zinc-300">
            <p className="text-yellow-400 font-semibold">📍 Seção [Contato] carregada na tela.</p>
          </div>
        ),
      };

    case "close":
    case "fechar":
    case "hide":
    case "ocultar":
      onSelectSection?.(null);
      return {
        output: (
          <p className="text-zinc-400 text-xs font-mono">
            📍 Seção ativa ocultada. Tela limpa.
          </p>
        ),
      };

    case "curriculo":
    case "cv":
    case "resume":
      downloadCV();
      return {
        output: (
          <div className="text-xs space-y-2 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800">
            <p className="text-emerald-400 font-bold flex items-center gap-1.5">
              <FileDown size={14} />
              <span>Download do Currículo iniciado com sucesso!</span>
            </p>
            <p className="text-zinc-300">
              O arquivo <span className="text-white font-mono font-semibold">{PROFILE.cv.filename}</span> foi baixado.
            </p>
            <a
              href={PROFILE.cv.path}
              download={PROFILE.cv.filename}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/30 text-blue-300 border border-blue-500/40 hover:bg-blue-600/50 transition cursor-pointer"
            >
              <FileDown size={12} />
              <span>Clique aqui caso o download não tenha iniciado</span>
            </a>
          </div>
        ),
      };

    case "help":
    case "?":
    case "ajuda":
      return {
        output: (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-blue-400 font-bold mb-1">Comandos interativos do sistema:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-zinc-300">
              <div><span className="text-cyan-400 font-semibold">1</span> / <span className="text-cyan-400 font-semibold">sobre</span> : Abrir Sobre Mim</div>
              <div><span className="text-cyan-400 font-semibold">2</span> / <span className="text-cyan-400 font-semibold">projetos</span> : Abrir Projetos</div>
              <div><span className="text-cyan-400 font-semibold">3</span> / <span className="text-cyan-400 font-semibold">skills</span> : Abrir Habilidades</div>
              <div><span className="text-cyan-400 font-semibold">4</span> / <span className="text-cyan-400 font-semibold">jornada</span> : Abrir Linha do Tempo</div>
              <div><span className="text-cyan-400 font-semibold">5</span> / <span className="text-cyan-400 font-semibold">contato</span> : Abrir Contatos</div>
              <div><span className="text-cyan-400 font-semibold">curriculo</span> : Baixar Currículo em PDF</div>
              <div><span className="text-cyan-400 font-semibold">fechar</span> : Fechar seção ativa</div>
              <div><span className="text-cyan-400 font-semibold">clear</span> : Limpar terminal</div>
              <div><span className="text-cyan-400 font-semibold">whoami</span> : Identidade do desenvolvedor</div>
              <div><span className="text-cyan-400 font-semibold">matrix</span> : Easter egg</div>
            </div>
          </div>
        ),
      };

    case "clear":
    case "cls":
      return { clearRequested: true };

    case "whoami":
      return {
        output: (
          <div className="text-xs space-y-1">
            <p className="text-green-400 font-bold">{PROFILE.name}</p>
            <p className="text-zinc-400">
              Estudante de {PROFILE.bio.course} @ UFAL | Técnico em TI @ IFAL | {PROFILE.location}.
            </p>
          </div>
        ),
      };

    case "matrix":
      return {
        output: (
          <p className="text-green-400 font-mono text-xs animate-pulse">
            01001101 01100001 01110100 01101000 01100101 01110101 01110011 ⚡ &quot;Wake up, Neo... Follow the white rabbit.&quot;
          </p>
        ),
      };

    case "sudo":
    case "sudo rm -rf /":
      return {
        output: (
          <p className="text-red-400 font-mono text-xs">
            ⚠️ Permissão negada: Visitante não tem acesso root a este terminal! 😉
          </p>
        ),
      };

    case "date":
      return {
        output: <p className="text-zinc-300 text-xs">{new Date().toLocaleString("pt-BR")}</p>,
      };

    default:
      if (cmd.startsWith("echo ")) {
        return {
          output: <p className="text-zinc-300 text-xs">{cmd.slice(5)}</p>,
        };
      }
      return {
        output: (
          <p className="text-red-400/90 text-xs font-mono">
            Comando não reconhecido: <span className="text-white font-bold">&quot;{cmd}&quot;</span>. Digite{" "}
            <button
              onClick={onHelpClick}
              className="text-cyan-400 underline hover:text-cyan-300 cursor-pointer"
            >
              help
            </button>{" "}
            para ajuda.
          </p>
        ),
      };
  }
}
