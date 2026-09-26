import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  display: "swap",
  variable: "--font-serif",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0e0c",
};

export const metadata: Metadata = {
  title: "24SHOOTS",
  description: "Estudio creativo de contenido y comunicación visual para marcas.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale") === "en" ? "en" : "es";

  return (
    <html lang={locale} className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
