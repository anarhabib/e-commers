# Web app

The app uses the Next.js App Router under `src/app`. Keep route-specific files
there and put reusable UI, feature modules, API services, hooks, and global
styles in their corresponding `src` directories.

```text
src/
  app/          Routes and layouts
  components/   Shared UI primitives and layouts
  features/     Domain-specific UI and state
  services/     Backend API clients
  hooks/        Reusable UI hooks
  store/        Global client state
  styles/       Global stylesheets
```

Run the app from the repository root with `pnpm --filter @flame-lenses/web dev`.
