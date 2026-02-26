# Mahithesh Portfolio (Next.js 14 + TypeScript + Tailwind + R3F)

Modern 3D interactive developer portfolio with App Router, glassmorphism UI, performance-focused dynamic imports, and Vercel-ready deployment.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Three Fiber + Drei
- Framer Motion
- Lucide React
- EmailJS

## Local Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## EmailJS Setup
Update `.env.local` with your EmailJS values:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Template fields used by contact form:
- `from_name`
- `reply_to`
- `message`

## Build for Production
```bash
npm run build
npm run start
```

## Deploy to Vercel
1. Push this project to GitHub.
2. Import repository in Vercel dashboard.
3. Framework preset: `Next.js` (auto-detected).
4. Add environment variables from `.env.example`.
5. Deploy.

## Performance Notes
- 3D hero scene is loaded with `next/dynamic` and `ssr: false`.
- UI animations are viewport-triggered where possible.
- Fonts are optimized via `next/font`.
- SEO metadata, sitemap, and robots are included.
