type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = 5;

export function checkRateLimit(key: string): { ok: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    const next = { count: 1, resetAt: now + WINDOW_MS };
    buckets.set(key, next);
    return { ok: true, remaining: MAX_PER_WINDOW - 1, resetAt: next.resetAt };
  }
  if (bucket.count >= MAX_PER_WINDOW) {
    return { ok: false, remaining: 0, resetAt: bucket.resetAt };
  }
  bucket.count += 1;
  return { ok: true, remaining: MAX_PER_WINDOW - bucket.count, resetAt: bucket.resetAt };
}
