This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Authentication (Google OAuth)

This project uses NextAuth v4 with Google OAuth.

1. Install deps (already in package.json):

```bash
npm install next-auth
```

2. Create `my-app/.env.local` from `.env.example` and set:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=generated_secret
# NEXTAUTH_URL=https://your-domain.com   # set in production
```

3. Start the dev server:

```bash
npm run dev
```

If you see a warning about multiple lockfiles or wrong workspace root, we set `turbopack.root` in `next.config.ts` to ensure `.env.local` is loaded from `my-app`.

Debug env presence (dev only):

- Visit `http://localhost:3000/api/debug/env` — it returns booleans indicating whether required env variables are present on the server.

4. Google redirect URI to add in Google Cloud Console:

- Authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

The API route is provided at `app/api/auth/[...nextauth]/route.ts`, and the auth configuration is in `auth.ts`.
Make sure to restart the dev server after changing environment variables.
