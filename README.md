# Forge3D

A futuristic, mobile-first portfolio and project-intake website for Forge3D,
an AI-assisted custom 3D modelling and printing service for the Greater Toronto
Area.

## Stack

- Next.js App Router with TypeScript
- React and Tailwind CSS
- Resend API for quote delivery
- Vercel Analytics
- CSS-built concept visuals with reduced-motion support

## Local development

Install dependencies, copy the environment template, and start the development
server:

```sh
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site builds without email credentials, but quote submissions return a
configuration message until `RESEND_API_KEY` and `QUOTE_TO_EMAIL` are set.

## Quote delivery

1. Create a Resend account and API key.
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY` and `QUOTE_TO_EMAIL`.
4. During initial testing, use the Resend onboarding sender and send to the
   account owner’s verified email.
5. Before launch, verify the production domain in Resend and set
   `QUOTE_FROM_EMAIL` to an address on that domain.

Attachments are limited to 4 MB and the following file types: STL, 3MF, OBJ,
STEP, STP, PNG, JPG, JPEG, and WEBP. The endpoint also includes validation,
a honeypot, and a best-effort in-memory rate limit. For sustained high traffic,
replace the in-memory limiter with a shared store such as Upstash Redis.

## Production checklist

- Replace concept illustrations with approved photos of real Forge3D prints.
- Confirm the domain and set `NEXT_PUBLIC_SITE_URL`.
- Configure Resend environment variables.
- Review the policy pages with qualified Ontario legal counsel.
- Verify pickup/delivery wording and customer response expectations.
- Run `npm run lint`, `npm run typecheck`, and `npm run build`.

Browser tests cover desktop and mobile layouts, keyboard access, navigation,
overflow, and the unconfigured quote-delivery state:

```sh
npx playwright install chromium
npm run test:e2e
```

## Deployment

Import this repository into Vercel, configure the environment variables for the
Production environment, and attach the custom domain. The project contains
generated metadata, Open Graph imagery, a web manifest, sitemap, robots rules,
and analytics integration.
