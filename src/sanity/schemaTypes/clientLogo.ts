import { defineField, defineType } from "sanity";

export const clientLogoType = defineType({
  name: "clientLogo",
  title: "Client Logo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Transparent PNG or SVG, dark mark preferred (shown on light backgrounds).",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "scale",
      title: "Display Scale",
      type: "number",
      initialValue: 1,
      description: "Relative size in the logo marquee (1 = default). Use to visually balance wide vs square marks.",
      validation: (rule) => rule.required().min(0.5).max(3),
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first in the marquee.",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Marquee Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
