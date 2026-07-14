/**
 * One-off migration: seeds the Sanity dataset for the new site.
 *  1. Deletes the old klxn site's documents (backed up first to _BACKUPS).
 *  2. Uploads the 12 blog images + 33 client logos as assets.
 *  3. Creates `post` docs (body converted from {t,x} blocks to Portable Text)
 *     and `clientLogo` docs.
 *
 * Run from the project root:
 *   npx sanity exec scripts/migrate-to-sanity.mjs --with-user-token
 */
import { getCliClient } from "sanity/cli";
import { createReadStream, readFileSync } from "node:fs";
import path from "node:path";

const client = getCliClient({ apiVersion: "2026-02-01" });

const POST_META = {
  "how-to-brief-a-video-production-company": { publishedAt: "2025-07-15", author: "Matt Hill" },
  "how-much-does-video-production-cost": { publishedAt: "2025-08-15", author: "Charlie Fox" },
  "how-long-should-a-brand-film-be": { publishedAt: "2025-09-15", author: "Matt Hill" },
  "what-is-branded-content": { publishedAt: "2025-10-15", author: "Jake Kirby" },
  "animation-vs-live-action-explainer-video": { publishedAt: "2025-11-15", author: "James England" },
  "why-your-corporate-video-isnt-working": { publishedAt: "2025-12-15", author: "Matt Hill" },
  "why-most-b2b-video-is-forgettable": { publishedAt: "2026-01-15", author: "Jake Kirby" },
  "the-case-for-the-brand-documentary": { publishedAt: "2026-02-15", author: "Jake Kirby" },
  "what-makes-a-great-podcast": { publishedAt: "2026-03-15", author: "James England" },
  "what-happens-on-a-shoot-day": { publishedAt: "2026-04-15", author: "Charlie Fox" },
  "video-for-the-health-sector": { publishedAt: "2026-05-15", author: "Matt Hill" },
  "how-to-build-a-video-content-strategy": { publishedAt: "2026-06-15", author: "Charlie Fox" },
};

// ── Load the hard-coded content ──
// content.ts is TypeScript; extract the two arrays by eval-ing their JSONish bodies.
const src = readFileSync("src/lib/content.ts", "utf8");
function extractArray(name, endMarker) {
  const start = src.indexOf(`export const ${name}`);
  const open = src.indexOf("[", start);
  const end = src.indexOf(endMarker, start);
  const body = src.slice(open, src.lastIndexOf("]", end) + 1);
  return eval(body);
}
const blogPosts = extractArray("blogPosts", "export const pricingBands");
const clients = extractArray("clients", "export const testimonials");
console.log(`Loaded ${blogPosts.length} posts, ${clients.length} client logos from content.ts`);

// ── 1. Delete the old site's documents ──
const OLD_TYPES = ["project", "service", "teamMember", "testimonial", "clientLogo", "siteSettings", "post"];
const oldIds = await client.fetch(`*[_type in $types][]._id`, { types: OLD_TYPES });
if (oldIds.length) {
  const tx = oldIds.reduce((t, id) => t.delete(id), client.transaction());
  await tx.commit();
  console.log(`Deleted ${oldIds.length} old documents`);
} else {
  console.log("No old documents to delete");
}

// ── 2 + 3. Upload assets and create documents ──
function keyed(obj) {
  return { _key: Math.random().toString(36).slice(2, 12), ...obj };
}

for (const post of blogPosts) {
  let mainImage;
  if (post.img) {
    const file = path.join("public", post.img);
    const asset = await client.assets.upload("image", createReadStream(file), {
      filename: path.basename(file),
    });
    mainImage = {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
      alt: post.title,
    };
  }
  const meta = POST_META[post.slug] || {};
  const body = post.blocks.map((b) =>
    keyed({
      _type: "block",
      style: b.t === "h2" ? "h2" : "normal",
      markDefs: [],
      children: [keyed({ _type: "span", text: b.x, marks: [] })],
    })
  );
  await client.createOrReplace({
    _id: `post-${post.slug}`,
    _type: "post",
    title: post.title,
    slug: { _type: "slug", current: post.slug },
    publishedAt: meta.publishedAt,
    author: meta.author,
    metaDesc: post.metaDesc,
    lead: post.lead,
    ...(mainImage ? { mainImage } : {}),
    body,
  });
  console.log(`post: ${post.slug}`);
}

let order = 10;
for (const c of clients) {
  const file = path.join("public", c.logo);
  const asset = await client.assets.upload("image", createReadStream(file), {
    filename: path.basename(file),
  });
  const id = `clientLogo-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  await client.createOrReplace({
    _id: id,
    _type: "clientLogo",
    name: c.name,
    logo: { _type: "image", asset: { _type: "reference", _ref: asset._id } },
    scale: c.scale,
    order,
  });
  console.log(`clientLogo: ${c.name} (order ${order})`);
  order += 10;
}

const counts = await client.fetch(
  `{ "posts": count(*[_type == "post"]), "logos": count(*[_type == "clientLogo"]) }`
);
console.log("Done:", JSON.stringify(counts));
