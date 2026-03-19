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
  title: "La Velada del Año V | Evento Presencial y Streaming",
  description:
    "El evento de entretenimiento más grande del año. Compra tus entradas o streaming para La Velada del Año V. 15 de Junio 2026 en el Estadio Metropolitano, Madrid.",
  keywords: [
    "La Velada",
    "evento",
    "boxeo",
    "streaming",
    "entertainment",
    "Madrid",
    "2026",
  ],
  authors: [{ name: "La Velada" }],
  openGraph: {
    title: "La Velada del Año V | Evento Presencial y Streaming",
    description:
      "El evento de entretenimiento más grande del año. Compra tus entradas o streaming.",
    url: "https://lavelada.com",
    siteName: "La Velada",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Velada del Año V",
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
