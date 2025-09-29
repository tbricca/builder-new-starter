# Builder.io Starter Template

A production-ready full-stack React application template with integrated Express server, featuring React Router 6 SPA mode, TypeScript, Vitest, and modern tooling with Builder.io branding and design system.

This starter template provides a solid foundation for building modern web applications while maintaining Builder.io's visual identity and design patterns.

## Tech Stack

- **Frontend**: React 18 + React Router 6 (spa) + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server integrated with Vite dev server
- **Testing**: Vitest
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons
- **Styling**: Builder.io design tokens and component patterns

## Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components
│   ├── Index.tsx         # Home page with hero section
│   ├── About.tsx         # About page showcasing tech stack
│   ├── Dashboard.tsx     # Example dashboard with data visualization
│   ├── Components.tsx    # UI component showcase
│   └── NotFound.tsx      # 404 page
├── components/ui/        # Pre-built UI component library (Radix + Tailwind)
├── App.tsx               # App entry point with SPA routing setup
└── global.css            # TailwindCSS 3 theming and global styles

server/                   # Express API backend
├── index.ts              # Main server setup (express config + routes)
└── routes/               # API handlers

shared/                   # Types used by both client & server
└── api.ts                # Example of how to share api interfaces
```

## Key Features

### Builder.io Branding & Design System

- **Consistent branding**: Builder.io logo, colors, and design patterns throughout
- **Dark theme**: Black background with purple accent color (#AC7EF4)
- **Professional navigation**: Header with responsive mobile menu
- **Design tokens**: CSS custom properties for consistent theming

### Example Pages & Routing

The template includes multiple example pages to demonstrate routing patterns and UI components:

- **Home (/)**: Hero section with welcome message and feature highlights
- **About (/about)**: Tech stack overview and feature descriptions
- **Dashboard (/dashboard)**: Interactive dashboard with cards, metrics, and data visualization
- **Components (/components)**: Comprehensive UI component showcase with tabs

### SPA Routing System

The routing system is powered by React Router 6:

- Routes are defined in `client/App.tsx` using the `react-router-dom` import
- Route files are located in the `client/pages/` directory
- Navigation is integrated throughout all pages with active state indicators

### Comprehensive UI Component Library

The template includes a full set of pre-built components:

- **Forms**: Input, Label, Switch, Slider, Textarea
- **Buttons**: Multiple variants (primary, secondary, outline, ghost, destructive) and sizes
- **Feedback**: Alert components for different message types
- **Data Display**: Badges, Progress bars, Cards
- **Layout**: Card layouts, responsive grids
- **Navigation**: Tabs, responsive navigation patterns

### Styling System

- **Primary**: TailwindCSS 3 utility classes with Builder.io design tokens
- **Theme**: Configured in `client/global.css` with CSS custom properties
- **UI components**: Pre-built library in `client/components/ui/`
- **Utility**: `cn()` function combines `clsx` + `tailwind-merge` for conditional classes
- **Responsive**: Mobile-first design with responsive breakpoints

### Express Server Integration

- **Development**: Single port (8080) for both frontend/backend
- **Hot reload**: Both client and server code
- **API endpoints**: Prefixed with `/api/`

#### Example API Routes

- `GET /api/ping` - Simple ping api
- `GET /api/demo` - Demo endpoint

### Shared Types

Import consistent types in both client and server:

```typescript
import { DemoResponse } from "@shared/api";
```

Path aliases:

- `@shared/*` - Shared folder
- `@/*` - Client folder

## Development Commands

```bash
npm run dev        # Start dev server (client + server)
npm run build      # Production build
npm run start      # Start production server
npm run typecheck  # TypeScript validation
npm test          # Run Vitest tests
```

## Starter Template Best Practices

This template follows Builder.io's starter template best practices:

### 1. Production-Ready Stack

- Uses production-grade tools (React, TypeScript, Vite, Express)
- Includes testing setup with Vitest
- Environment configuration ready
- Optimized build process

### 2. Rich Examples for AI Learning

- Multiple full example pages demonstrating different layouts
- Comprehensive component showcase
- Real-world patterns: forms, tables, dashboards
- Interactive elements and state management examples

### 3. Design System Integration

- Builder.io branding consistently applied
- Design tokens defined in CSS custom properties
- Component library with Radix UI primitives
- Responsive design patterns

### 4. Clear Application Shell

- Full navigation header with responsive mobile menu
- Consistent layout patterns across pages
- Multiple routes demonstrating navigation
- Professional footer and branding

### 5. Development Experience

- Hot reload for instant feedback
- TypeScript for type safety
- Path aliases for clean imports
- Consistent code organization

## Adding Features

### New Page Route

1. Create component in `client/pages/MyPage.tsx`
2. Add route in `client/App.tsx`:

```typescript
<Route path="/my-page" element={<MyPage />} />
```

3. Add navigation links in page headers

### New API Route

1. Create shared interface in `shared/api.ts` (optional):

```typescript
export interface MyRouteResponse {
  message: string;
}
```

2. Create route handler in `server/routes/my-route.ts`:

```typescript
import { RequestHandler } from "express";
import { MyRouteResponse } from "@shared/api";

export const handleMyRoute: RequestHandler = (req, res) => {
  const response: MyRouteResponse = {
    message: "Hello from my endpoint!",
  };
  res.json(response);
};
```

3. Register route in `server/index.ts`:

```typescript
import { handleMyRoute } from "./routes/my-route";
app.get("/api/my-endpoint", handleMyRoute);
```

### Customize Branding

1. Update logo URL in page headers
2. Modify color scheme in `client/global.css`
3. Update navigation links and CTAs
4. Customize footer and brand messaging

## Production Deployment

- **Standard**: `npm run build` + `npm start`
- **Cloud Deployment**: Use Netlify or Vercel via their MCP integrations
- **Environment Variables**: Configure in deployment platform

## Architecture Notes

- Single-port development with Vite + Express integration
- TypeScript throughout (client, server, shared)
- Full hot reload for rapid development
- Production-ready with multiple deployment options
- Comprehensive UI component library included
- Type-safe API communication via shared interfaces
- Builder.io branding and design system integrated
- Multiple example pages for AI learning and development patterns

This starter template provides everything needed to build modern, professional web applications while maintaining Builder.io's high-quality design standards and development practices.
