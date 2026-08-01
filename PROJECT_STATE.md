# Project State

Project name: Anam Web Studio - Professional Website Development Service

Project objective: Build a professional, SEO-friendly Nuxt website for Anam Maulana's website development service to increase trust, showcase services and portfolio, and convert visitors into WhatsApp consultation or order leads.

Approved requirement version: v1

Current sprint: Sprint 2 - Business Conversion Pages, Dark Mode, and GitHub Setup

Current status: IN PROGRESS - IMPLEMENTATION

Completed sprints:
- Sprint 1: Foundation and Design System - PASS WITH NOTES, approved by Owner on 2026-08-01.

Pending sprints:
- Sprint 3 candidate after Sprint 2 approval/result: Portfolio, Blog, and SEO.
- Sprint 4 candidate after Sprint 3 approval/result: QA and Production Readiness.

Proposed requirement version: v1

Requirement summary:
- Product: Portfolio and landing page website for website development services.
- Target customers: UMKM, local business owners, freelancers, personal brands, small companies, schools/institutions, business owners without a website, and owners of outdated websites needing redesign.
- Main outcome: A modern, responsive, high-performance, SEO-friendly marketing website with clear WhatsApp conversion paths.
- Primary conversion: Consultation or order through WhatsApp.
- Content areas: Homepage, About, Services, Pricing, Portfolio, Case Studies, Work Process, Testimonials, Quote Request, Contact, Blog, FAQ, Privacy Policy, and Terms of Service.
- Content management: Services, portfolio, pricing packages, FAQ, testimonials, and blog content must be separated from components; blog uses Markdown/Nuxt Content.
- SEO scope: SSR or SSG, unique metadata, canonical URLs, sitemap, robots.txt, clean URLs, breadcrumbs, 404 page, broken-link checks, structured data, Open Graph, Twitter/X cards, semantic headings, alt text, internal linking, and natural keyword usage.
- Performance scope: Lighthouse targets are Performance >= 90, SEO >= 95, Accessibility >= 90, and Best Practices >= 90.
- Design direction: Modern, premium, clean, trustworthy, mobile-first, readable typography, clear CTA contrast, consistent brand colors, subtle animation, and non-generic visual identity.
- Technical stack: Nuxt with Vue, TypeScript preferred, Tailwind CSS, SSR or SSG, Markdown/Nuxt Content, Git, .env.example, automated tests, and production build readiness for Vercel, Netlify, or Cloudflare Pages.

Included scope:
- Nuxt project foundation and Tailwind setup.
- Reusable layout, navigation, footer, and design system foundation.
- Homepage.
- About, services, pricing, process, testimonials, FAQ, contact, quote request form, and WhatsApp integration.
- Portfolio listing and case study pages.
- Blog listing/detail with Markdown content.
- SEO metadata, sitemap, robots.txt, structured data, Open Graph, Twitter/X cards, and internal linking.
- Responsive states from 360px to desktop.
- Loading, validation, success, empty, error, mobile navigation, and keyboard focus states.
- Unit tests for important utilities.
- End-to-end tests for navigation and consultation form.
- README for installation, configuration, content management, testing, and deployment.

Excluded scope:
- Paid services, paid APIs, page builders, premium templates, fake testimonials, fake project results stated as facts, unnecessary JavaScript, secret/token storage in repository, backend CRM, payment gateway, real client data collection beyond the approved consultation flow, dashboard/admin CMS, and implementation before Owner approval.

Approved constraints:
- Use Nuxt based on Vue for SEO; Vue SPA alone is not acceptable for this project.
- Use TypeScript unless Owner later approves JavaScript-only.
- Use Tailwind CSS.
- Use SSR or SSG.
- Use semantic HTML and modern browser support for Chrome, Edge, Firefox, and Safari.
- Responsive minimum width: 360px.
- Use environment variables for WhatsApp number and contact configuration.
- Include basic spam protection for the consultation form.
- No paid service, no page builder, no premium template.
- Use Git with clear commits per approved feature/sprint.
- Do not store secrets or complete environment values in the repository.
- Each sprint requires Owner approval before implementation.
- Nadella must prepare test scenarios before Lincon starts implementation.
- Sara documents only actual verified behavior.
- Do not start Sprint 2 before Sprint 1 is completed, passes QA, and is approved by Owner.

Approved business rules:
- Prices use "Mulai dari" labels, not final fixed prices.
- Final price is determined after customer needs are analyzed.
- Testimonials must not be fake; if none are available, testimonial content must be optional or clearly placeholder/non-factual.
- Portfolio/project data must not claim real client outcomes unless verified by Owner.
- Quote request must validate required fields and generate a formatted WhatsApp message.
- Contact and WhatsApp behavior must be configurable through environment variables.
- Privacy and Terms pages must explain form data usage and that candidate customer data is not shared.

Decisions:
- 2026-08-01: Owner requested new project intake for Anam Web Studio and provided detailed initial requirement.
- 2026-08-01: Scofield recorded proposed requirement v1 and set status to WAITING_REQUIREMENT_APPROVAL.
- 2026-08-01: Owner approved requirement v1 via `APPROVE REQUIREMENT`.
- 2026-08-01: Scofield prepared Sprint 1 plan for approval gate; no implementation delegated.
- 2026-08-01: Owner approved Sprint 1 via `APPROVE SPRINT`.
- 2026-08-01: Scofield moved Sprint 1 to QA test scenario preparation before implementation.
- 2026-08-01: Nadella completed `S1-QA-01` test scenario handoff. Scofield moved Sprint 1 to Lincon implementation.
- 2026-08-01: Lincon completed Sprint 1 implementation in commit `a9d0541`. Scofield performed parent verification and moved Sprint 1 to QA verification.
- 2026-08-01: Nadella completed `S1-QA-02` with verdict PASS WITH NOTES. Scofield moved Sprint 1 to documentation.
- 2026-08-01: Sara completed `S1-DOC-01`. Scofield prepared Sprint 1 Review and set status to WAITING_SPRINT_RESULT_APPROVAL.
- 2026-08-01: Owner approved Sprint 1 result via `APPROVE RESULT`.
- 2026-08-01: Owner requested next sprint notes: push/use GitHub repository `https://github.com/anammaulana/portofolio-web-service.git` and add an elegant switchable dark mode.
- 2026-08-01: Scofield prepared Sprint 2 plan and set status to WAITING_SPRINT_PLAN_APPROVAL. No Sprint 2 implementation delegated yet.
- 2026-08-01: Owner approved Sprint 2 via `APPROVE SPRINT`.
- 2026-08-01: Scofield moved Sprint 2 to QA test scenario preparation before implementation.
- 2026-08-01: Nadella completed `S2-QA-01` test scenario handoff. Scofield moved Sprint 2 to Lincon implementation.

Open issues:
- Exact WhatsApp number/contact values are not recorded and should be provided through environment variables during implementation.
- Git remote must be corrected before pushing project code. Current local `origin` points to `https://github.com/anammaulana/setup-ai-agent`, while Owner requested `https://github.com/anammaulana/portofolio-web-service.git`.
- Nuxt dev server may emit repeated `#app-manifest` pre-transform error logs after `npm run dev` and page request. QA assessed this as low severity and non-blocking because `/` returns HTTP 200 and tests/build pass.
- Production build may emit dependency deprecation warning `DEP0155` from the dependency tree. QA assessed this as low severity and non-blocking.

Known risks:
- Four one-day sprints are tight because the scope includes marketing pages, portfolio, blog, SEO, structured data, performance, tests, and documentation.
- Lighthouse targets may need image/content discipline and careful JavaScript control.
- Portfolio and testimonial sections can accidentally imply fake client proof if content is not clearly separated as placeholder or Owner-verified content.
- Quote form spam protection must remain simple without adding paid services or heavy backend scope.
- Deploy target choice may affect final Nuxt mode and configuration.
- Dark mode must not reduce readability, CTA contrast, accessibility, or SEO/performance targets.
- GitHub push must avoid committing generated folders, secrets, `.env`, test artifacts, or unrelated workspace files.

Requirement audit:
- Strengths: SEO direction is correct with Nuxt SSR/SSG; conversion objective is clear; page inventory, content model, performance target, and delivery phases are well defined.
- Scope risk: The full content and SEO scope is broad for four one-day sprints, but still manageable if Sprint 1 remains foundation-only and later sprints avoid CMS/admin features.
- Blocker status: No hard blocker for requirement approval. Some implementation details can be decided before Sprint 1 planning.

Sprint roadmap:
- Sprint 1: Foundation and Design System.
- Sprint 2: Business Conversion Pages, Dark Mode, and GitHub Setup.
- Sprint 3: Portfolio, Blog, and SEO.
- Sprint 4: QA and Production Readiness.

Sprint 1 plan:
- Sprint title: Foundation and Design System.
- Sprint goal: Establish a Nuxt SEO-ready project foundation, design system, responsive layout, navigation, footer, homepage, and baseline verification without building deeper business pages.
- Included scope: Nuxt + TypeScript setup; Tailwind setup; project structure; reusable layout; navigation; footer; design token foundation; homepage sections for hero, benefits, services preview, portfolio preview placeholder, process preview, FAQ preview, and CTA; responsive foundation from 360px; SEO baseline metadata for homepage; `.env.example`; basic README setup; initial unit/e2e test setup; Nadella test scenario before Lincon implementation.
- Excluded scope: About detail page, Services detail page, Pricing page, Contact page, quote form, WhatsApp message generation, Portfolio listing/detail, Blog, full structured data, sitemap, robots.txt, production deployment, full Lighthouse optimization, paid services, CMS/admin dashboard, and Sprint 2-4 features.
- Deliverables: Nuxt app scaffold; Tailwind styling foundation; layout/nav/footer components; homepage; extracted content/config structure for homepage/service preview; environment variable example for contact config; basic tests; README foundation; QA test scenario and QA verdict.
- Dependencies: approved requirement v1; local Node/npm availability; Owner-provided contact values can remain placeholders in `.env.example`.
- Risks: Homepage can grow too large if Sprint 2 content is pulled forward; SEO/performance targets depend on asset discipline; deploy target remains undecided but should not block Sprint 1 foundation.
- Definition of Done: Sprint 1 implementation follows approved scope; tests/build pass; Nadella verifies behavior against Sprint 1 criteria; Sara documents only verified setup and Sprint 1 behavior; Scofield returns Sprint Review for Owner result approval.

Sprint 1 backlog:
- S1-QA-01: Owner Nadella; complexity S; dependency approved Sprint 1. Create test scenarios before implementation for navigation, homepage sections, responsive behavior, accessibility smoke checks, SEO baseline, env placeholders, and build/test commands.
- S1-PROG-01: Owner Lincon; complexity M; dependency S1-QA-01. Scaffold Nuxt + TypeScript + Tailwind project with clean structure, scripts, `.env.example`, and README setup baseline.
- S1-PROG-02: Owner Lincon; complexity M; dependency S1-PROG-01. Build reusable layout, navigation, footer, design tokens, responsive behavior, and keyboard focus states.
- S1-PROG-03: Owner Lincon; complexity M; dependency S1-PROG-02. Build homepage with approved sections, CTA placeholders, SEO baseline metadata, and separated content/config data.
- S1-PROG-04: Owner Lincon; complexity S; dependency S1-PROG-03. Add baseline unit/e2e tests and fix only Sprint 1 QA defects.
- S1-QA-02: Owner Nadella; complexity M; dependency Lincon handoff. Verify acceptance criteria, responsive behavior, build/test commands, accessibility smoke, and no scope creep.
- S1-DOC-01: Owner Sara; complexity S; dependency QA PASS or PASS WITH NOTES. Update README and project notes based only on verified Sprint 1 behavior.

Sprint 1 acceptance criteria:
1. Nuxt project runs locally with documented install/dev/build commands.
2. TypeScript and Tailwind CSS are configured.
3. Project has a clear reusable structure for layouts, components, content/config, and tests.
4. Homepage is implemented with hero, benefit/value message, service preview, portfolio placeholder/preview, process preview, FAQ preview, and final CTA.
5. Navigation and footer are responsive and usable on mobile width starting 360px.
6. Homepage uses semantic HTML with one primary H1.
7. Homepage has unique SEO title and description.
8. Contact/WhatsApp values are not hardcoded as secrets; `.env.example` uses placeholders.
9. No fake testimonials or unverified project results are claimed as facts.
10. Basic unit/e2e test setup exists and covers at least homepage render/navigation smoke behavior.
11. Production build passes.
12. README documents Sprint 1 setup and verified behavior after QA.

Last Owner approval: 2026-08-01 - Sprint 2 approved.

Sprint 1 QA test scenario handoff:
- S1-QA-01 completed before implementation, as required by Owner.
- QA will verify Nuxt/TypeScript/Tailwind foundation, reusable structure, homepage sections, responsive navigation/footer from 360px, semantic HTML with one H1, SEO metadata baseline, `.env.example` safety, no fake social proof, baseline tests, production build, and README accuracy.
- Suggested checks include install, dev server smoke, production build, unit/e2e smoke tests, lint/typecheck if available, responsive manual checks, accessibility smoke, and scope creep review.
- Scope guard: Sprint 1 must not claim About, Services detail, Pricing, Contact/quote form, WhatsApp generation, real portfolio/blog, sitemap, robots, full structured data, deployment, or full Lighthouse certification as complete.

Next required Owner action: Wait for Lincon Sprint 2 implementation handoff, then Scofield will assign Nadella for `S2-QA-02`.

Sprint 1 implementation handoff:
- Lincon completed Nuxt 3 + Vue + TypeScript + Tailwind foundation.
- Added reusable structure: `layouts`, `components`, `content`, `assets/css`, `tests/unit`, and `tests/e2e`.
- Implemented homepage sections for hero, benefits/value message, services preview, portfolio placeholder, process preview, FAQ preview, and final CTA.
- Added homepage SEO title and meta description baseline.
- Added responsive navigation and mobile hamburger behavior.
- Added `.env.example` with placeholder-only WhatsApp configuration.
- Added README setup and verification commands.
- Commit: `a9d0541 feat: scaffold anam web studio homepage`.
- Parent verification by Scofield: `npm run test` passed after rerun, `npm run build` passed. Initial parallel test/build attempt failed due Nuxt process lock and is not counted as implementation failure.

Sprint 1 QA verification result:
- Nadella completed `S1-QA-02`.
- Verdict: PASS WITH NOTES.
- `npm run test` passed: unit 3/3 and Playwright Chromium 3/3.
- `npm run build` passed.
- Acceptance criteria 1-12 passed.
- Non-blocking note: Nuxt dev server emits repeated `#app-manifest` pre-transform error logs after `npm run dev` and page request, while the page returns HTTP 200 and automated tests/build pass.
- Non-blocking note: production build emits dependency warning `DEP0155` from dependency tree.
- Recommendation: proceed to documentation; no return to Lincon required for Sprint 1 gate.

Sprint 1 documentation result:
- Sara completed `S1-DOC-01`.
- Updated `README.md` with Sprint 1 setup, development, verification, scope, out-of-scope, security/env notes, verified behavior, and QA notes.
- Documentation was verified by README and diff review.
- No test/build rerun was performed for documentation-only work because QA already verified the commands.
- Remaining documentation limitation: deployment final, sitemap/robots, structured data, form, and WhatsApp message generation are not documented as complete because they are not part of Sprint 1.

Sprint 1 review:
- Sprint goal: Establish a Nuxt SEO-ready project foundation, design system, responsive layout, navigation, footer, homepage, and baseline verification without building deeper business pages.
- Completed tasks: S1-QA-01, S1-PROG-01, S1-PROG-02, S1-PROG-03, S1-PROG-04, S1-QA-02, S1-DOC-01.
- Deliverables: Nuxt 3 app foundation, Tailwind setup, reusable app layout/header/footer/home components, homepage content/config structure, `.env.example`, unit/e2e tests, README documentation.
- QA result: PASS WITH NOTES.
- Tests performed: `npm run test` passed; `npm run build` passed.
- Defects found: two low severity non-blocking warnings for Nuxt `#app-manifest` dev server log and `DEP0155` dependency warning.
- Defects fixed: none required for Sprint 1 gate.
- Remaining defects: non-blocking warning tracking only.
- Documentation completed: README updated for verified Sprint 1 behavior.
- Acceptance criteria result: 12/12 PASS.
- Definition of Done result: PASS WITH NOTES.
- Result: PASS WITH NOTES.

Sprint 2 plan:
- Sprint title: Business Conversion Pages, Dark Mode, and GitHub Setup.
- Sprint goal: Extend the Sprint 1 foundation into core conversion pages, add an elegant accessible dark mode switch, and prepare/push the project to the approved GitHub repository without starting portfolio/blog/advanced SEO scope.
- Included scope: About page; Services page; Pricing page with "Mulai dari" labels; Work Process page/section; FAQ page/section; Contact/consultation entry page or section; simple WhatsApp CTA/message configuration using environment variables; elegant light/dark theme with persistent switch; responsive and keyboard-accessible theme toggle; Git remote correction to `https://github.com/anammaulana/portofolio-web-service.git`; push approved project code to GitHub after local verification.
- Excluded scope: Portfolio listing/detail, case studies, blog, sitemap, robots.txt, full structured data, deployment, CMS/admin dashboard, payment gateway, backend CRM, paid anti-spam service, real testimonials/client outcomes not verified by Owner, and Sprint 3-4 features.
- Deliverables: Business/conversion pages; reusable pricing/service/FAQ/process/contact content structure; dark mode implementation; updated tests; README update for theme behavior and GitHub repository; verified GitHub remote/push evidence.
- Dependencies: Sprint 2 plan approval; GitHub repository access; no secrets in `.env`; contact/WhatsApp values can remain placeholders unless Owner provides real public values.
- Risks: Adding all business pages plus dark mode can affect one-day sprint size; GitHub remote currently points to the wrong repository and must be corrected carefully; dark mode needs QA on contrast and responsive states.
- Definition of Done: Sprint 2 implementation follows approved scope; Nadella's pre-implementation scenarios exist before Lincon starts; tests/build pass; GitHub remote is correct and project code is pushed to the approved repository; QA verifies conversion pages, dark mode, Git safety, responsive behavior, and no scope creep; Sara documents only verified behavior; Scofield returns Sprint Review for Owner result approval.

Sprint 2 backlog:
- S2-QA-01: Owner Nadella; complexity S; dependency approved Sprint 2. Create test scenarios before implementation for business pages, pricing wording, WhatsApp/contact configuration, dark mode switch, responsive behavior, accessibility/contrast, GitHub remote safety, build/test commands, and scope guard.
- S2-PROG-01: Owner Lincon; complexity M; dependency S2-QA-01. Build About, Services, Pricing, Process, FAQ, and Contact/consultation entry pages or page sections using reusable content/config structure.
- S2-PROG-02: Owner Lincon; complexity M; dependency S2-PROG-01. Add elegant light/dark theme support with accessible switch, persistence, Tailwind-compatible styling, and no layout shift.
- S2-PROG-03: Owner Lincon; complexity S; dependency S2-PROG-02. Add/update unit and e2e coverage for page navigation, theme switching, mobile menu compatibility, and WhatsApp/contact CTA smoke behavior.
- S2-PROG-04: Owner Lincon; complexity S; dependency S2-PROG-03. Correct Git remote to `https://github.com/anammaulana/portofolio-web-service.git`, verify `.gitignore`/secret safety, commit approved Sprint 2 work, and push to GitHub.
- S2-QA-02: Owner Nadella; complexity M; dependency Lincon handoff. Verify acceptance criteria, responsive behavior from 360px, dark mode contrast/usability, no fake proof, test/build, and GitHub push evidence.
- S2-DOC-01: Owner Sara; complexity S; dependency QA PASS or approved PASS WITH NOTES. Update README/project notes for verified Sprint 2 behavior, dark mode usage, content configuration, GitHub repository, and known limitations.

Sprint 2 acceptance criteria:
1. About, Services, Pricing, Process, FAQ, and Contact/consultation entry content are implemented using reusable content/config where practical.
2. Pricing uses "Mulai dari" wording and does not present final fixed prices as guaranteed.
3. WhatsApp/contact CTA uses environment-based configuration or safe placeholders; no secrets or private values are committed.
4. Dark mode switch is visible, elegant, keyboard-accessible, and works on mobile and desktop.
5. Theme preference persists across reloads without breaking SSR/SSG rendering.
6. Light and dark modes preserve readable contrast, clear CTA hierarchy, and professional visual quality.
7. Navigation covers new business/conversion pages and remains responsive from 360px.
8. No fake testimonials, fake client results, or unverified portfolio outcomes are introduced.
9. Unit/e2e tests cover navigation and theme-switch smoke behavior.
10. `npm run test` and `npm run build` pass.
11. Git remote points to `https://github.com/anammaulana/portofolio-web-service.git` before push; no push is made to the old `setup-ai-agent` remote.
12. README documents verified Sprint 2 behavior, dark mode, setup/test commands, and GitHub repository notes.

Sprint 2 QA test scenario handoff:
- S2-QA-01 completed before implementation, as required by Owner.
- QA will verify business/conversion pages, pricing copy safety, WhatsApp/contact config safety, dark mode switch behavior, light/dark visual quality, keyboard/focus accessibility, responsive behavior from 360px, no fake proof/content claims, automated coverage, README accuracy, Git remote safety, and push hygiene.
- Required post-implementation commands: `npm run test`, `npm run build`, `git remote -v`, and `git status --short`; optional `npm run lint` and `npm run typecheck` if available in `package.json`.
- Scope guard: Sprint 2 must not claim portfolio listing/detail, blog, sitemap, robots.txt, full structured data, deployment, CMS/admin dashboard, payment gateway, backend CRM, paid anti-spam service, fake testimonials, fake client results, or unverified portfolio claims as complete.
- Blockers include failed test/build, dark mode not keyboard-usable, theme persistence breaking SSR/SSG, remote still pointing to the old repository before push, secrets/private values committed, fixed final price claims, or fake proof.
- Non-blocking notes may include dependency warnings that do not fail build/test or minor copy/visual polish issues that do not break business rules, contrast, or usability.

Next required Owner action: Wait for Lincon Sprint 2 implementation handoff, then Scofield will assign Nadella for `S2-QA-02`.
