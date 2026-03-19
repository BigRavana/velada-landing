import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Combate Final V | Evento Presencial y Streaming",
  description:
    "El evento de entretenimiento más grande del año. Compra tus entradas o streaming para Combate Final V. 15 de Junio 2026 en el Estadio Metropolitano, Madrid.",
  keywords: [
    "Combate Final",
    "evento",
    "boxeo",
    "streaming",
    "entertainment",
    "Madrid",
    "2026",
  ],
  authors: [{ name: "Combate Final" }],
  openGraph: {
    title: "Combate Final V | Evento Presencial y Streaming",
    description:
      "El evento de entretenimiento más grande del año. Compra tus entradas o streaming.",
    url: "https://combatefinal.com",
    siteName: "Combate Final",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Combate Final V",
    description: "El evento de entretenimiento más grande del año.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-dark antialiased">{children}</body>
    </html>
  );
}
