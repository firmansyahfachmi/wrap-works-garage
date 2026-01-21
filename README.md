# WrapWorks Garage Landing Page

A professional, mobile-first landing page for WrapWorks Garage, built with modern web technologies.

## Tech Stack
- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [Lucide React](https://lucide.dev) (Icons)

## Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

The project is organized as follows:

- **`app/`**: Contains the Next.js App Router files.
  - `page.tsx`: The main landing page requiring all sections.
  - `layout.tsx`: Root layout including global styles and fonts.
  
- **`components/`**: Reusable UI components and page sections.
  - `Navbar.tsx`: Responsive navigation bar.
  - `Hero.tsx`: Main banner with call-to-action.
  - `Services.tsx`, `Testimonials.tsx`, `Portfolio.tsx`, `FAQ.tsx`: Content sections.
  - `ContactForm.tsx`: Contact form with validation.
  - `Footer.tsx`: Site footer.
  - `ui/`: Shadcn UI primitive components (Button, Input, Card, etc.).

- **`lib/`**: Utility functions and configuration.
  - **`content.ts`**: **Centralized content configuration.** All text content for the website is defined here.

- **`public/`**: Static assets.
  - `images/`: Stores images for the Hero and Portfolio sections.

## Content Management

This project uses a centralized content management approach for easy updates.

To change texts, images, or configuration options:

1. Open **`lib/content.ts`**.
2. Locate the relevant section (e.g., `navbar`, `hero`, `services`).
3. Modify the values. Types are inferred, so you'll get autocomplete support if using a decent code editor.

Example `lib/content.ts`:
```typescript
export const content = {
  hero: {
    title: 'New Title Here',
    // ...
  }
}
```

## Customization

- **Styling**: Global styles are in `app/globals.css`. Tailwind configuration is handled automatically.
- **UI Components**: Shadcn UI components are in `components/ui`. You can customize them using standard Tailwind classes.
