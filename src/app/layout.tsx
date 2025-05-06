import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";


const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programação gratuitos",
  description: "Os melhores cursos de programação gratuitos com a melhor experiência de aprendizado e foco",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-Br">
      <body className={nunito.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}