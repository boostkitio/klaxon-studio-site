import type { NextConfig } from "next";

// Old WordPress work slugs that have no matching page on the new site.
const retiredWorkSlugs = [
  "state-of-european-tech",
  "roche",
  "elsevier-roundtable",
  "elsevier",
  "blackford",
  "atomico",
  "accurx",
  "livemore-customer-case-study",
  "showreel",
  "galderma-social-video-content",
  "ciklum",
];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async redirects() {
    return [
      // Old WordPress page URLs
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/our-work-showreel", destination: "/work", permanent: true },
      { source: "/healthcare-video-production", destination: "/services/health-sector", permanent: true },
      { source: "/terms-conditions", destination: "/terms", permanent: true },
      { source: "/cookie-notice", destination: "/privacy-policy", permanent: true },
      { source: "/temp-title-post", destination: "/", permanent: true },
      { source: "/template-format", destination: "/", permanent: true },
      { source: "/category/:slug*", destination: "/blog", permanent: true },
      // Retired case studies go to the work index (must precede the generic rule)
      ...retiredWorkSlugs.map((slug) => ({
        source: `/our-work/${slug}`,
        destination: "/work",
        permanent: true,
      })),
      // Everything else maps 1:1 — new work slugs deliberately reuse the old ones
      { source: "/our-work/:slug", destination: "/work/:slug", permanent: true },
      { source: "/our-work", destination: "/work", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
