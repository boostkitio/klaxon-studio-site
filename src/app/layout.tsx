import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, OG_BASE } from "@/lib/site";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DESCRIPTION =
  "Klaxon Studio is a full-service video production company in Bermondsey, London, making commercials, branded content, documentary, corporate, social and podcast film for brands that refuse to be ignored.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Klaxon Studio | Video Production Company London",
    template: "%s | Klaxon Studio",
  },
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    ...OG_BASE,
    title: "Klaxon Studio | Video Production Company London",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Klaxon Studio | Video Production Company London",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
