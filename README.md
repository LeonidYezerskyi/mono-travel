# MONO TRAVEL — Bespoke Monochrome Expeditions

Editorial Swiss-grid landing page and interactive expedition configurator for private monochrome expeditions. Built with a strict black-and-white aesthetic, zero-shift bilingual switching (`UA` / `EN`), and React 19 Server Actions.

**Live Demo:** [mono-travel.vercel.app](https://mono-travel.vercel.app)

![MONO TRAVEL Preview](./public/preview.png)

## Tech Stack

- **Framework:** Next.js 16 (App Router) & React 19 (`useActionState`, Server Actions)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (Swiss-grid layout, custom range inputs, `tabular-nums`, layout-shift-free bilingual typography)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Key Features

- **Editorial Swiss-Grid Design:** High-contrast monochrome interface (`#000` / `#FFF`) with `1px` structural borders, display typography, and responsive breakpoints down to `320px`.
- **Zero-Shift Bilingual Support (`UA` / `EN`):** Instant client-side language switching without vertical layout shifts.
- **Interactive Expedition Builder:** Real-time calculation of expedition duration, group size, and curated add-ons with direct payload transfer into the booking modal.
- **Booking Modal & Server Actions:** Validated expedition request submission via React 19 `useActionState` and Next.js Server Actions with optional webhook dispatch (`EXPEDITION_WEBHOOK_URL`).
- **Custom System Boundaries:** Dedicated monochrome `404` (`app/not-found.tsx`) and localized Error Boundary (`app/error.tsx`).

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
