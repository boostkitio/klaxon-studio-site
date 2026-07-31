import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SITE_URL, OG_BASE } from "@/lib/site";
import { websiteSchema, siteNavigationSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ScrollToTop";
import DisableDraftMode from "@/components/DisableDraftMode";
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

// Ties the site to the Klaxon Studio Google Business Profile (hasMap CID)
// so search engines treat them as one entity.
const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Klaxon Studio",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+44 20 8058 0669",
  email: "hello@klaxon.studio",
  image: `${SITE_URL}/images/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 408, Cocoa Studios, The Biscuit Factory, 100 Drummond Road",
    addressLocality: "London",
    postalCode: "SE16 4FA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4943706,
    longitude: -0.0617451,
  },
  hasMap: "https://maps.google.com/?cid=14804452344662294871",
  sameAs: [
    "https://instagram.com/klaxonstudiouk",
    "https://www.linkedin.com/company/klaxon-studio",
  ],
  areaServed: ["London", "South East England", "United Kingdom"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={[LOCAL_BUSINESS_JSONLD, websiteSchema(), siteNavigationSchema()]} />
        <ScrollToTop />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
        <GoogleAnalytics gaId="G-T15XQVQSZG" />
        {/* Keep the preview machinery draft-mode-only so the public
            site stays fully static and the read token never ships to visitors. */}
        {isDraftMode && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
