# LaunchKit — Next.js SaaS Landing Page Template

Responsive, customizable SaaS landing page with light/dark theme, a CSS dashboard mockup, feature cards, pricing, accordion FAQ, and a contact CTA.

## Stack
- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS 4 (configured; additional custom styles in `app/globals.css`)
- Lucide React icons

## Requirements
Node.js 20.9+ (Node 22 LTS recommended) and pnpm 10+. Internet access is required for the first dependency install.

## Install and run
```bash
corepack enable
pnpm install
pnpm dev
```
Visit http://localhost:3000.

## Validate before deployment
```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Customize before using/selling
1. Edit brand name, URL, email, nav links, features, pricing, and FAQs in `lib/site.ts`.
2. Replace demo plan `mailto:` links with real checkout URLs if needed. The template does NOT process payments.
3. Customize colors and typography in `app/globals.css`.
4. Replace the mock dashboard in `components/dashboard-preview.tsx` with screenshots or your own interface.
5. Review `app/layout.tsx` metadata.
6. Review and tailor `LICENSE.txt` before selling; remove this checklist or adapt for customers.

## Theme
The theme switcher is a client component using `localStorage` (key: `launchkit-theme`). Users without JavaScript get the default stylesheet theme; the toggle needs JavaScript.

## Deployment
Push to your own repository and import into Vercel, or use any hosting service supporting Next.js. No environment variables are needed. The sample pricing buttons only open email drafts.

## Included sections
Header, hero, illustrative dashboard, features, product showcase, pricing, FAQ, CTA, footer.

## Limitations
This is a frontend marketing template. It intentionally does not include authentication, payment processing, analytics, a database, server APIs, or real dashboard data. Demo figures are fictional.

## License
See `LICENSE.txt`. Before distributing as a seller, replace the sample copyright information and validate the license for your business.
