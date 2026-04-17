# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Horizon Drilling & Co (`artifacts/horizon-drilling`)
- **Kind**: web
- **Preview path**: `/`
- **Stack**: React 19 + Vite + TypeScript, Tailwind CSS v4, Framer Motion, Three.js, GSAP, Wouter (routing)
- **Pages**: Home, About, Services, Projects, Fleet, News, Careers, Contact, 404
- **Design**: Dark navy (#0A0E1A), teal (#00B4D8), gold (#C8A96E) palette; Barlow Condensed typography
- **Features**: 
  - 4-video rotating hero with crossfade transitions (SBM Offshore CDN videos)
  - 3D particle canvas (Three.js)
  - Scroll-reveal animations (Framer Motion)
  - SEOGS booth video embed on News page
  - Filterable project grid
  - Vessel fleet cards
  - Job listings + application form
  - Contact form + 4 global offices
  - Animated stat counters
  - Mobile responsive navbar with hamburger menu

### API Server (`artifacts/api-server`)
- **Kind**: api
- **Port**: 8080
- **Stack**: Express 5 + Drizzle ORM + PostgreSQL
