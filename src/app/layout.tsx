import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Merriweather } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Hightecc · Basile Bong · Softwareentwicklung",
  description:
    "Freelance Softwareentwicklung. Outcome-orientiert, klar kommuniziert, pünktlich geliefert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${dmSans.variable} ${merriweather.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="grid-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
