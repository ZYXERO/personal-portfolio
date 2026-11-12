# Kaushik Selvakumar — Portfolio

Personal portfolio site for selected projects, social links, and project media (screenshots, recordings, live demos).

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Motion** (`motion/react`)
- **next/font** — Syne, Source Sans 3, IBM Plex Mono

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update content

| What | Where |
|---|---|
| Name, bio, socials | `src/data/site.ts` |
| Projects, GitHub, demos | `src/data/projects.ts` |
| Screenshots / covers | `public/projects/<project-id>/` |
| Hero image | `public/hero-atmosphere.jpg` |

### Add a project recording

1. Put an `.mp4` in `public/projects/<id>/demo.mp4`, **or** use a YouTube/Vimeo URL.
2. In `src/data/projects.ts`, set:

```ts
media: {
  cover: "/projects/<id>/cover.jpg",
  screenshots: ["/projects/<id>/cover.jpg"],
  recording: "/projects/<id>/demo.mp4", // or "https://youtu.be/..."
  demoUrl: "https://your-live-demo.example",
}
```

## Ship

```bash
npm run build
npm start
```

Deploy on [Vercel](https://vercel.com) by importing this repo — no special config required.
