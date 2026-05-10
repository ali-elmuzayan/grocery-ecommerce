# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A full-stack grocery application split into two workspaces:

- `backend/` — NestJS 11 (TypeScript) REST API.
- `frontend/` — React 19 + Vite + TypeScript SPA, styled with TailwindCSS v4 and shadcn/ui (Radix UI primitives, `lucide-react` icons).

The two are independent npm projects; install dependencies and run commands from within each respective directory.

## Common Commands

### Backend (`backend/`)

- **Install**: `npm install`
- **Dev server (watch)**: `npm run start:dev`
- **Start**: `npm run start`
- **Production build**: `npm run build` then `npm run start:prod`
- **Lint / format**: `npm run lint` / `npm run format`
- **Unit tests**: `npm test` (Jest, `*.spec.ts` under `src/`)
- **Single test file**: `npx jest path/to/file.spec.ts`
- **Watch tests**: `npm run test:watch`
- **Coverage**: `npm run test:cov`
- **E2E tests**: `npm run test:e2e` (config in `test/jest-e2e.json`)

### Frontend (`frontend/`)

- **Install**: `npm install`
- **Dev server**: `npm run dev` (Vite)
- **Build**: `npm run build` (runs `tsc -b` then `vite build`)
- **Preview build**: `npm run preview`
- **Lint**: `npm run lint`

## Architecture

### Backend

Standard NestJS structure under `backend/src/`:

- `main.ts` — application bootstrap (creates the Nest app and binds the HTTP port).
- `app.module.ts` — root module wiring controllers and providers.
- `app.controller.ts` / `app.service.ts` — example route + service.

Add new features as Nest modules (controller + service + module) and import them in `app.module.ts`. Tests colocate as `*.spec.ts` next to source files; rootDir for Jest is `src` (see `package.json` `jest` block).

### Frontend

Vite + React 19 app under `frontend/src/`:

- `main.tsx` — React entry point mounting `<App />`.
- `App.tsx` — root component.
- `components/` — UI components (shadcn/ui-style components live here).
- `lib/` — shared utilities (e.g. `cn` helper for class merging).
- `assets/` — static assets imported by components.
- `index.css` — Tailwind v4 entry; global styles and CSS variables.

Path aliases and shadcn config are defined in `components.json` and `tsconfig*.json`. Use `clsx` + `tailwind-merge` (typically via a `cn` helper in `lib/`) for conditional class names, and `class-variance-authority` for component variants.

### Cross-cutting

- `.http` at the repo root contains REST Client requests for manual API testing against the backend.
- There is no shared package or monorepo tooling (no workspaces / Turbo / Nx); treat `backend` and `frontend` as separate projects.

## Conventions

- TypeScript everywhere; keep strictness consistent with each project's `tsconfig`.
- Prettier + ESLint are configured per project — run the project's `lint` / `format` script before committing.
- Do not introduce cross-imports between `backend/` and `frontend/`; share contracts by duplicating types or by defining them via API responses, not by importing across projects.
