import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from './config';
import Header from "./components/Header";
import Footer from "./components/Footer";

// Configurando a fonte Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"], // Pesos desejados (normal e bold, por exemplo)
  style: ["normal", "italic"], // Estilos desejados
  subsets: ["latin"], // Subconjunto para suporte a caracteres latinos
  variable: "--font-montserrat", // Variável CSS personalizada
});

export const metadata: Metadata = {
  title: "Imóveis em Natal - Nome do Corretor",
  description: "Encontre os melhores imóveis em Natal com o corretor Nome do Corretor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Header menuItems={siteConfig.menuItems} nomeCorretor={siteConfig.nomeCorretor} logo={siteConfig.logo} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
