# Project State

Project name: Anam Web Studio - Professional Website Development Service

Project objective: Build a professional, SEO-friendly Nuxt website for Anam Maulana's website development service to increase trust, showcase services and portfolio, and convert visitors into WhatsApp consultation or order leads.

Approved requirement version: v1

Current sprint: Sprint 1 planned, not approved

Current status: WAITING_SPRINT_PLAN_APPROVAL

Completed sprints:
- None.

Pending sprints:
- Sprint 1: Foundation and Design System.
- Sprint 2 candidate after Sprint 1 approval/result: Business and Conversion Pages.
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

Open issues:
- Sprint 1 approval is pending.
- Exact WhatsApp number/contact values are not recorded and should be provided through environment variables during implementation.

Known risks:
- Four one-day sprints are tight because the scope includes marketing pages, portfolio, blog, SEO, structured data, performance, tests, and documentation.
- Lighthouse targets may need image/content discipline and careful JavaScript control.
- Portfolio and testimonial sections can accidentally imply fake client proof if content is not clearly separated as placeholder or Owner-verified content.
- Quote form spam protection must remain simple without adding paid services or heavy backend scope.
- Deploy target choice may affect final Nuxt mode and configuration.

Requirement audit:
- Strengths: SEO direction is correct with Nuxt SSR/SSG; conversion objective is clear; page inventory, content model, performance target, and delivery phases are well defined.
- Scope risk: The full content and SEO scope is broad for four one-day sprints, but still manageable if Sprint 1 remains foundation-only and later sprints avoid CMS/admin features.
- Blocker status: No hard blocker for requirement approval. Some implementation details can be decided before Sprint 1 planning.

Sprint roadmap:
- Sprint 1: Foundation and Design System.
- Sprint 2: Business and Conversion Pages.
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

Last Owner approval: 2026-08-01 - requirement v1 approved.

Next required Owner action: Reply with `APPROVE SPRINT`, `REVISION SPRINT`, or `CANCEL SPRINT`.
