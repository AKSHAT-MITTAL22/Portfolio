# Akshat Mittal — Portfolio

React portfolio for **Akshat Mittal**, a Generative AI and Python developer. Content lives in data files so you can update details without rewriting page markup.

## Features

- Modular sections: hero, metrics, about, skills, experience, projects, credentials, contact
- Dark / light theme toggle (saved in `localStorage`)
- Contact form that sends mail through the Web3Forms API
- Responsive layout, scroll reveal, and metric count-up animations
- Vercel-ready Vite build

## Tech stack

- React 19
- Vite
- Lucide React
- CSS theme tokens in `src/styles/global.css`

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Update content

Edit files in `src/data/`.

| File | Controls |
|------|----------|
| `src/data/profile.js` | Name, title, email, social links, hero copy, resume URL |
| `src/data/metrics.js` | Impact numbers |
| `src/data/about.js` | About heading and paragraphs |
| `src/data/skills.js` | Skill groups and chips |
| `src/data/experience.js` | Roles and bullets |
| `src/data/projects.js` | Project cards, images, and facts |
| `src/data/credentials.js` | Education, awards, certifications |
| `src/data/contact.js` | Contact copy and form messages |

Put images and the resume in `public/assets/` and reference them as `/assets/your-file.png`.

## Theme

The header **Light / Dark** control sets `data-theme` on `<html>`. The choice is stored as `portfolio-theme` and applied before first paint.

## Contact form

The form posts to [Web3Forms](https://web3forms.com). Required variable:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key
```

### Local

1. Create a key at [web3forms.com](https://web3forms.com) with the inbox that should receive messages.
2. Confirm the verification email.
3. Copy `.env.example` to `.env` and paste the access key.
4. Restart `npm run dev`.

Until the key is set, the form validates but does not send. Do not commit `.env`.

## Deploy on Vercel

1. Push this project to GitHub (exclude `.env`).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Use:
   - **Framework:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Add `VITE_WEB3FORMS_ACCESS_KEY` in **Settings → Environment Variables** for Production, Preview, and Development.
5. Deploy. After changing env vars, **Redeploy**.

`vercel.json` already sets the Vite output and SPA rewrite.

Or from this folder after `npx vercel login`:

```bash
npx vercel
npx vercel --prod
```

## Project structure

```
src/
├── data/            Site content
├── components/
│   ├── layout/      Header, footer, theme toggle
│   ├── sections/    Page sections and contact form
│   └── ui/          Shared UI
├── context/         Theme provider
├── hooks/           Scroll, nav, counters, reveal
├── lib/             Theme helpers and contact API
└── styles/          Global CSS
public/assets/       Images and resume
```

## License

Personal portfolio. Update the data files and assets for your own use.
