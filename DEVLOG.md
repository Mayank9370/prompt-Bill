# Development Log

## Day 1 — 2026-05-21

**Hours worked:** 4.5

**What I did:**
- Read through the assignment requirements and decided on the product direction. I want PromptBill to feel like a modern SaaS rather than just an infrastructure dashboard.
- Initialized the Next.js 16 (App Router) project with TypeScript and Tailwind CSS v4.
- Added shadcn/ui to get a clean, accessible component library right out of the gate.
- Built the initial landing page structure with a focus on "stopping overpaying for AI."
- Planned the layout for the main audit workflow and set up the basic route structure.
- Initialized all the required markdown documentation files (`ARCHITECTURE.md`, `METRICS.md`, etc.) to keep track of decisions early on.
- Created the GitHub repository and deployed the first commit to Vercel to make sure CI/CD is working.

**What I learned:**
- Integrating shadcn/ui with Tailwind v4 required a bit more manual setup for CSS variables than I anticipated, but the resulting developer experience is totally worth it.
- It's really tempting to start adding complex backend logic and database models right away. I had to force myself to focus just on the UI and the frontend architecture first to keep the MVP simple.

**Blockers / what I'm stuck on:**
- I'm still debating the best UX direction for the actual audit flow. Should it be a multi-step wizard, or a single complex form? I'm leaning towards a single two-column layout for now to keep the MVP straightforward, but I'm worried it might get cluttered if users add a lot of tools.
- Finding the right balance between scope and polish is tough. I want the landing page to look "Product Hunt ready", but I also need to make sure I have time to finish the actual functional components.

**Plan for tomorrow:**
- Build out the actual audit form UI.
- Create reusable tool cards for the different AI subscriptions (ChatGPT, Claude, Cursor, etc.).
- Add dynamic tool/plan selection with state management.
- Improve mobile responsiveness for the form layout.

---

## Day 2 — [YYYY-MM-DD]
*[Placeholder]*

---

## Day 3 — [YYYY-MM-DD]
*[Placeholder]*
