# Grounded

The second iteration of a mindfulness coaching website, built with React, Vite, and GSAP. The Norwegian homepage introduces individual coaching and workshops for businesses through large typography, photography, and animations linked to scrolling.

This project was developed as a frontend case assignment for a prospective employer.

## Design and interactions

The visual direction combines warm ivory tones, blue accents, PP Mori typography, and a continuous background gradient. The layout alternates between spacious text sections and large photographic compositions.

- A full-screen video hero introduces the brand.
- The intro combines a diagonal oval photo, parallax, and the separation of **PRESTASJON** and **PAUSE** to create space between the two ideas.
- Three service descriptions scroll beside a sticky image window that changes with the active service.
- The business section expands a rounded image to fill the screen, reveals its description, and stays pinned while About moves over it.
- The CTA reveals **SKAP**, **MER**, and **ROM** in sequence before introducing the invitation to book a conversation.
- The footer reveals a stationary wordmark beneath a scrolling panel of navigation and contact information.

## Built with

- **React and JavaScript** — components and page composition.
- **Vite** — local development and production builds.
- **GSAP and ScrollTrigger** — timelines, parallax, and pinned sections.
- **@gsap/react** — React integration and animation cleanup in components using `useGSAP`.
- **CSS** — Grid, Flexbox, shared typography values, responsive rules, and the background gradient.
- **SVG** — the oval clipping shape and animated link arrows.

Images are stored locally as WebP files, and the fonts are self-hosted.

## Run locally

Use Node.js **22.12 or later** and npm.

```bash
git clone https://github.com/lulu630/grounded-website-2.git
cd grounded-website-2
npm install
npm run dev
```

Open the local address printed by Vite in the terminal.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build after running the build command. |
| `npm run lint` | Check the code with ESLint. |

## Project structure

```text
src/
├── Components/    # Navbar, Hero, Intro, Services, Bedrifter, About, Cta, Footer
├── assets/        # Fonts, images, and the hero video
├── App.jsx        # Homepage composition
├── App.css        # Shared component styles and section layouts
├── index.css      # Font declarations, reset, and global design values
└── main.jsx       # React entry point
```

## Current scope

The homepage is implemented as a sequence of teasers for the planned service, business, about, and contact pages. Standalone pages, routing, and a working booking flow are not implemented yet; several navigation and social links remain placeholders.

Responsive layouts and animation timing are still being refined. The project does not currently include a backend.

## Visual references

- [TrueKind](https://truekindskincare.com/) — inspiration for the oval photographic composition.
- [Paper](https://paper.design/) — inspiration for the layered footer reveal.

## Author

[lulu630](https://github.com/lulu630)
