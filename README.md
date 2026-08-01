# Anam Web Studio

Nuxt 3 website foundation for Anam Web Studio's professional website development service.

## Sprint 1 Scope

- Nuxt + Vue + TypeScript + Tailwind CSS foundation.
- Reusable layout, navigation, footer, UI components, homepage sections, and content data.
- Homepage sections: hero, benefits/value message, services preview, portfolio placeholder, process preview, FAQ preview, and final CTA.
- Homepage SEO title and meta description baseline.
- Placeholder-only WhatsApp environment configuration.
- Unit and e2e smoke tests for homepage render and navigation behavior.

Out of scope for Sprint 1: About page, Services detail page, Pricing page, Contact page, quote form, WhatsApp message generation, real portfolio details, testimonials, blog flow, sitemap, robots, structured data, deployment, CMS/admin, and Lighthouse certification.

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

## QA Notes

- During development, Nuxt may emit repeated `#app-manifest` pre-transform error logs after `npm run dev` and a page request. This is a non-blocking Sprint 1 note because `/` returns HTTP 200 and the verified tests/build pass.
- Production build may emit a `DEP0155` dependency warning from the dependency tree. This is a non-blocking Sprint 1 note.

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

## Security Notes

- `.env` is ignored by git.
- `.env.example` contains placeholders only.
- No real phone number, tokens, API keys, passwords, private keys, or credentials should be committed.
- WhatsApp message generation and real contact wiring are not implemented in Sprint 1.
