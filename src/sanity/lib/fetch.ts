import "server-only";
import { draftMode } from "next/headers";
import type { QueryParams } from "next-sanity";
import { client } from "./client";

const token = process.env.SANITY_API_READ_TOKEN;

/**
 * Draft-aware fetch. Published requests are cached and tagged — a Sanity
 * webhook hits /api/revalidate to bust the tags on publish, so public pages
 * stay fully static between edits. Draft mode (Presentation tool) bypasses
 * the cache and reads draft content with stega overlays enabled.
 */
export async function sanityFetch<T = unknown>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags: string[];
}): Promise<T> {
  const isDraft = (await draftMode()).isEnabled;

  if (isDraft) {
    if (!token) throw new Error("SANITY_API_READ_TOKEN is required for draft mode");
    return client.fetch<T>(query, params, {
      token,
      perspective: "drafts",
      useCdn: false,
      stega: true,
      next: { revalidate: 0 },
    });
  }

  return client.fetch<T>(query, params, {
    token,
    perspective: "published",
    stega: false,
    next: { tags },
  });
}
