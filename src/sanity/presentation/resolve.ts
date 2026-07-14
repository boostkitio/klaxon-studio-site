import { defineLocations, type PresentationPluginOptions } from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    post: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || "Untitled", href: `/blog/${doc?.slug}` },
          { title: "Blog Index", href: "/blog" },
        ],
      }),
    }),
    clientLogo: defineLocations({
      select: { title: "name" },
      resolve: () => ({
        locations: [{ title: "Homepage (logo marquee)", href: "/" }],
      }),
    }),
  },
};
