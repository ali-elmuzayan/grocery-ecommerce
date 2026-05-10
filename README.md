# Grocery App

A full-stack grocery web application built with **NestJS** (backend) and **React + Vite** (frontend).

> Status: 🚧 Work in progress.

## Tech Stack

**Backend** (`backend/`)
- [NestJS 11](https://nestjs.com/) (TypeScript)
- Express platform adapter
- Jest for unit & e2e testing
- ESLint + Prettier

**Frontend** (`frontend/`)
- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- TypeScript
- [TailwindCSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- [lucide-react](https://lucide.dev/) icons

## Project Structure

```
04_grocery_app/
├── backend/      # NestJS REST API
│   └── src/
├── frontend/     # React + Vite SPA
│   └── src/
├── CLAUDE.md     # Guidance for Claude Code
└── README.md
```

The two apps are independent npm projects. There is no monorepo tooling — install and run each separately.

## Prerequisites

- [Node.js](https://nodejs.org/) **>= 20**
- npm (bundled with Node)

## Getting Started

Clone the repository:

```bash
git clone <repo-url>
cd 04_grocery_app
```

### 1. Backend

```bash
cd backend
npm install
npm run start:dev
```

The API will start on the port configured in `backend/src/main.ts` (default NestJS port: `3000`).

### 2. Frontend

In a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`).

## Scripts

### Backend (`backend/`)

| Command | Description |
| --- | --- |
| `npm run start:dev` | Start API in watch mode |
| `npm run start` | Start API |
| `npm run build` | Compile to `dist/` |
| `npm run start:prod` | Run compiled production build |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run test:cov` | Run tests with coverage |
| `npm run lint` | Lint & autofix |
| `npm run format` | Format with Prettier |

### Frontend (`frontend/`)

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check & build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint with ESLint |

## Testing

- Backend unit tests live next to source files as `*.spec.ts` under `backend/src/`.
- E2E tests live under `backend/test/` and use the config in `backend/test/jest-e2e.json`.

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Run lint + tests in the affected workspace before committing.
3. Open a pull request.

## License

UNLICENSED — see individual `package.json` files.
