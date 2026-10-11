import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07080d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Matheus Barros | Desenvolvedor de Software",
  description:
    "Portfólio interativo de Matheus Barros. Desenvolvedor de Software e estudante de Ciência da Computação na UFAL. Especialista em backend, APIs e arquitetura de sistemas.",
  keywords: [
    "Matheus Barros",
    "Desenvolvedor",
    "Backend",
    "Ciência da Computação",
    "UFAL",
    "Next.js",
    "TypeScript",
    "Portfólio",
  ],
  authors: [{ name: "Matheus Barros" }],
  openGraph: {
    title: "Matheus Barros | Desenvolvedor de Software",
    description:
      "Portfólio interativo com terminal CLI integrado, projetos modernos e jornada técnica.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#07080d] text-zinc-100 antialiased selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
