# Launch Runbook: klaxon.studio Cutover

The new site is live on Vercel (project `klaxon-studio-site`, boostkit team). This is everything
left to do to point klaxon.studio at it and retire the old WordPress site.

## 1. DNS Cutover

Add klaxon.studio as the production domain on the Vercel project, with www redirecting to the apex.
Take the exact DNS records from the Vercel dashboard (Project > Settings > Domains) at the time of
cutover — do not use values from memory.

Before flipping, confirm where the domain's DNS is hosted and get access (currently points at the
old WordPress host).

## 2. Resend Domain Verification (Contact Form From-Address)

The contact form currently sends from `klaxon@boostform.app` (verified interim domain) to
`studio@klaxon.studio`. The `klaxon.studio` domain has been registered in Resend (eu-west-1) and is
waiting for these DNS records — add them during the DNS work:

| Record | Type | Name | Value |
|--------|------|------|-------|
| DKIM | TXT | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDUeXbXOzqg+KosmNAqVZ...` (full value in Resend dashboard > Domains > klaxon.studio) |
| SPF | MX | `send` | `feedback-smtp.eu-west-1.amazonses.com` (priority 10) |
| SPF | TXT | `send` | `v=spf1 include:amazonses.com ~all` |

Once Resend shows the domain as verified, change `RESEND_FROM_EMAIL` on the Vercel project to
`Klaxon Studio <studio@klaxon.studio>` (production, preview, development) and redeploy.

Note: these records are on the `send` / `resend._domainkey` subdomains, so they do not interfere
with the client's existing mailbox MX records. Do not touch the root MX records.

## 3. Post-Cutover Checks

- Crawl the site and spot-check the 301s: `/about-us`, `/contact-us`, `/our-work/<slug>`,
  `/healthcare-video-production`, `/terms-conditions`, `/cookie-notice`, `/our-work-showreel`
- Submit the contact form on the live domain and confirm the email arrives at studio@klaxon.studio
- Verify OG tags on / and a work page with curl (og:image must resolve at https://klaxon.studio/images/og-image.jpg)
- Submit `https://klaxon.studio/sitemap.xml` in Google Search Console (property already exists for the domain)
- Confirm Vercel Bot Protection is not challenging Googlebot (verified bots are exempt by default)

## 4. Client Items Still Outstanding

- About page: studio/team photo + any missing founder portraits (ImageSlot placeholders show until then)
- WhatsApp contact was removed (the build had a placeholder number, Ofcom's fictional 07700 900xxx range);
  add the real number back to `contactRows` / `footerCols` in `src/lib/content.ts` if the client wants it
- Client sign-off on the Pricing page figures (£2,000 / £4,500 day-rate anchors and project bands)
- Client review of the Privacy Policy page (written fresh — the old WordPress one was unedited boilerplate)

## 5. Retire the Old Infrastructure

After a stable week: cancel the old WordPress hosting, and delete the `klxn` Vercel project +
`boostkitio/klxn` repo if the previous rebuild is no longer wanted as reference.
