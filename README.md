# Anam Web Studio

Nuxt 3 website foundation for Anam Web Studio's professional website development service.

## Implemented Scope

- Nuxt + Vue + TypeScript + Tailwind CSS foundation.
- Reusable layout, navigation, footer, UI components, homepage sections, and content data.
- Homepage sections: hero, benefits/value message, services preview, portfolio placeholder, process preview, FAQ preview, and final CTA.
- Homepage SEO title and meta description baseline.
- Placeholder-only WhatsApp environment configuration.
- Unit and e2e smoke tests for homepage render and navigation behavior.
- Sprint 2 business pages: About, Services, Pricing, Process, FAQ, and Contact.
- Responsive navigation links for Sprint 2 pages from desktop and 360px mobile menu.
- Persistent light/dark mode toggle with keyboard-accessible button and visible focus state.
- Contact CTA reads `NUXT_PUBLIC_WHATSAPP_NUMBER` when configured and falls back to a safe local contact page placeholder.
- Sprint 2 revision UI polish: premium hero layout, stronger content hierarchy, refined cards/sections, and temporary Google CDN-hosted visual placeholders.

Out of scope: portfolio listing/detail, case studies, blog, sitemap, robots.txt, full structured data, production deployment, CMS/admin dashboard, payment gateway, backend CRM, paid anti-spam service, fake testimonials, fake client results, and unverified portfolio/client outcome claims.

## Setup

```bash
npm install
npx playwright install chromium
```

Create a local `.env` only when needed. Do not commit it. Use `.env.example` as the placeholder reference.

```env
NUXT_PUBLIC_WHATSAPP_NUMBER=YOUR_WHATSAPP_NUMBER
```

`YOUR_WHATSAPP_NUMBER` is a placeholder. Do not add real phone numbers, tokens, passwords, private keys, or production credentials to committed files.

## Development

```bash
npm run dev
```

Nuxt serves the app locally. The homepage is available at `/`.

Implemented pages:

- `/`
- `/about`
- `/services`
- `/pricing`
- `/process`
- `/faq`
- `/contact`

## Verification

```bash
npm run test:unit
npm run test:e2e
npm run build
```

`npm run test` runs unit tests followed by Playwright e2e tests.

Verified Sprint 1 behavior:

- Homepage renders all approved Sprint 1 sections.
- Navigation works on desktop.
- Hamburger menu opens and closes on a 360px viewport.
- Homepage has exactly one primary `h1`.
- Homepage title and meta description are customized for Anam Web Studio.
- Portfolio area is a placeholder and does not claim fake testimonials, client names, or unverified results.
- `.env.example` contains placeholder-only WhatsApp configuration.
- Unit tests, Playwright e2e smoke tests, and production build are part of the verified Sprint 1 baseline.

Verified Sprint 2 behavior:

- About, Services, Pricing, Process, FAQ, and Contact pages render and are discoverable from navigation.
- Pricing uses `Mulai dari` wording and does not present final fixed prices as guaranteed.
- Contact CTA remains environment-based and placeholder-safe when `NUXT_PUBLIC_WHATSAPP_NUMBER` is empty.
- Light/dark mode toggle is visible, keyboard-accessible, and persists after reload through `localStorage`.
- Navigation works on desktop and mobile at 360px minimum.
- Unit and Playwright smoke tests cover Sprint 2 navigation, safe pricing content, and theme persistence.
- Revision verification confirms the homepage and key conversion pages render with improved visual hierarchy and temporary `www.gstatic.com` assets without adding fake portfolio/testimonial claims.

## QA Notes

- During development, Nuxt may emit repeated `#app-manifest` pre-transform error logs after `npm run dev` and a page request. This is a non-blocking Sprint 1 note because `/` returns HTTP 200 and the verified tests/build pass.
- Production build may emit a `DEP0155` dependency warning from the dependency tree. This is a non-blocking Sprint 1 note.
- Temporary visual placeholders are loaded from Google-hosted CDN URLs and should be replaced with brand/project-owned assets before production launch.

## Structure

```text
assets/css/          Tailwind entry and global styles
components/App*      Site shell components
components/Home/     Homepage section components
components/Ui/       Reusable UI components
content/             Site and homepage content/config data
layouts/             Nuxt layouts
pages/               Nuxt pages
tests/unit/          Vitest tests
tests/e2e/           Playwright tests
```

## GitHub Repository

Approved Sprint 2 repository:

```text
https://github.com/anammaulana/portofolio-web-service.git
```

Do not push this project to the old `setup-ai-agent` remote.

## Security Notes

- `.env` is ignored by git.
- `.env.example` contains placeholders only.
- No real phone number, tokens, API keys, passwords, private keys, or credentials should be committed.
- WhatsApp message generation and real contact wiring are not implemented in Sprint 1.
