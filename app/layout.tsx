import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Montserrat } from "next/font/google";

// Fontes do Google com CSS custom property
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  // Se quiser aplicar a fonte como classe: className: "font-montserrat"
});

// Define os metadados para todas as páginas
export const metadata: Metadata = {
  title: "Volterra360 - Agência de Viagem",
  description: "Sua parceira completa em viagens corporativas e de lazer",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "Next.js",
};

// Layout root do App Router
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${openSans.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen antialiased font-open-sans">
        {children}
      </body>
    </html>
  );
}
