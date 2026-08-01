# Anam Web Studio

Nuxt website foundation for Anam Web Studio's professional website development service.

## Sprint 1 Scope

- Nuxt + Vue + TypeScript + Tailwind CSS foundation.
- Reusable layout, navigation, footer, UI components, homepage sections, and content data.
- Homepage sections: hero, benefits/value message, services preview, portfolio placeholder, process preview, FAQ preview, and final CTA.
- Homepage SEO title and meta description baseline.
- Unit and e2e smoke tests for homepage render and navigation behavior.

Out of scope for Sprint 1: detail pages, pricing, contact form, WhatsApp message generation, real portfolio claims, testimonials, blog flow, sitemap, robots, deployment, CMS/admin, and full Lighthouse certification.

## Setup

```bash
npm install
npx playwright install chromium
```

Create a local `.env` only when needed. Do not commit it. Use `.env.example` as the placeholder reference.

```env
NUXT_PUBLIC_WHATSAPP_NUMBER=YOUR_WHATSAPP_NUMBER
```

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
- No real phone number, tokens, API keys, passwords, private keys, or credentials are committed.
