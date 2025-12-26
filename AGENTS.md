# AGENTS.md

This file contains guidelines for agentic coding agents working in this repository.

## Build & Development Commands

### Core Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run type checking (includes React Router typegen)

### Testing
- No test framework currently configured in this project
- When adding tests, follow the project's React Router v7 conventions

## Project Overview

This is a React Router v7 application using:
- **Framework**: React Router v7 (SSR disabled, SPA mode)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript with strict mode
- **Build Tool**: Vite
- **Package Manager**: Bun (based on .bun-version file)

## Code Style Guidelines

### File Structure
- Route components go in `app/routes/`
- Shared components go in `app/`
- Use file-based routing as defined in `app/routes.ts`
- Assets go in `public/` or alongside components (like SVGs in component folders)

### Import Style
- Use ES6 imports/exports
- Import React Router types from `"+types/filename"` (auto-generated)
- Group imports: external libraries first, then internal modules
- Example: `import { Welcome } from "../welcome/welcome";`

### TypeScript Conventions
- Use strict TypeScript mode (already configured)
- Export types for route components: `export function meta({}: Route.MetaArgs)`
- Use proper typing for props and function parameters
- Import types with `import type` when possible

### Component Structure
- Follow the pattern seen in existing files:
  ```tsx
  export function meta({}: Route.MetaArgs) {
    return [
      { title: "Page Title" },
      { name: "description", content: "Page description" },
    ];
  }

  export default function ComponentName() {
    return <div>...</div>;
  }
  ```

### Styling Conventions
- Use Tailwind CSS classes exclusively
- Follow existing color scheme: `bg-white dark:bg-gray-950`
- Use responsive prefixes when needed
- Leverage Tailwind's dark mode support

### Error Handling
- Use React Router's ErrorBoundary pattern
- Check for route errors with `isRouteErrorResponse`
- In development, show full error details including stack traces

### Naming Conventions
- Components: PascalCase
- Files: kebab-case for components, camelCase for utilities
- CSS classes: Tailwind utility classes only
- Variables: camelCase

### Security Best Practices
- Never commit secrets or API keys
- Use environment variables for sensitive data
- The project includes analytics (Plausible, PostHog) - maintain these integrations

### Path Aliases
- Use `~/` prefix for imports from the app directory
- Configured in tsconfig.json: `"~/*": ["./app/*"]`

## Development Workflow

1. Always run `npm run typecheck` after making changes
2. Test in development mode with `npm run dev`
3. Build and test production build with `npm run build`
4. The app uses SPA mode (ssr: false in react-router.config.ts)

## Special Considerations

- This is a personal portfolio site for kennethlieyanto.com
- Analytics integration is already configured
- The project uses modern React patterns (React 19, Router v7)
- Maintain clean, minimal design approach following existing examples

When adding new features, follow the established patterns and keep the codebase consistent with existing conventions.