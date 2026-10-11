import { Music, Telescope, Palette, Gamepad2, Camera } from "lucide-react";
import { Hobby } from "@/types/hobby";

export const HOBBIES_DATA: Hobby[] = [
  {
    id: "musica",
    title: "Música",
    tag: "Palhetas & Cordas",
    icon: <Music size={22} className="text-blue-400" />,
    description:
      "A música faz parte da minha vida, e toco violão há bastante tempo. Além de gostar de tocar no meu tempo livre, também toco na igreja, onde a música tem um significado especial para mim.",
    color: "from-blue-500/10 to-transparent",
    borderColor: "hover:border-blue-500/50",
  },
  {
    id: "astronomia",
    title: "Astronomia & Cosmos",
    tag: "Curiosidade & Ciência",
    icon: <Telescope size={22} className="text-cyan-400" />,
    description:
      "Fascinado pelas estrelas e pela imensidão do universo. Gosto de acompanhar fenômenos astronômicos, especialmente eclipses, e observar esses acontecimentos sempre que posso.",
    color: "from-cyan-500/10 to-transparent",
    borderColor: "hover:border-cyan-500/50",
  },
  {
    id: "desenho",
    title: "Desenho & Arte Digital",
    tag: "Criatividade Visual",
    icon: <Palette size={22} className="text-purple-400" />,
    description:
      "Gosto de desenhar e explorar minha criatividade no papel. Embora hoje não pratique tanto quanto antes, ainda é um hobby pelo qual tenho carinho.",
    color: "from-purple-500/10 to-transparent",
    borderColor: "hover:border-purple-500/50",
  },
  {
    id: "jogos",
    title: "Jogos Eletrônicos",
    tag: "Video Games",
    icon: <Gamepad2 size={22} className="text-amber-400" />,
    description:
      "Sou apaixonado por jogos eletrônicos, principalmente RPGs. Gosto de explorar mundos, conhecer histórias e mergulhar em universos diferentes. Meu favorito é The Elder Scrolls IV: Oblivion.",
    color: "from-amber-500/10 to-transparent",
    borderColor: "hover:border-amber-500/50",
  },
  {
    id: "fotografia",
    title: "Fotografia & Perspectiva",
    tag: "Luz & Enquadramento",
    icon: <Camera size={22} className="text-rose-400" />,
    description:
      "Gosto de fotografar momentos e detalhes que chamam minha atenção. Acho interessante a forma como uma foto consegue registrar uma perspectiva única de algo que, muitas vezes, passaria despercebido.",
    color: "from-rose-500/10 to-transparent",
    borderColor: "hover:border-rose-500/50",
  },
];
