# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BruisedArtrash is a portfolio website for an artist, built with React 19, TypeScript, and TailwindCSS. The site features a distinctive dark, expressionist visual style with custom color palette inspired by the artist's work.

## Development Commands

- `npm run dev` - Start development server with Vite hot reload
- `npm run build` - Build for production (runs TypeScript compilation then Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Architecture

### React Router Structure
The app uses React Router v7 with a single layout pattern:
- **MainLayout**: Contains navigation, footer, and responsive mobile menu
- **Pages**: HomePage, GalleryPage, AboutPage, ContactPage
- **Route handling**: All routes wrapped in MainLayout with Outlet for page content

### Component Architecture
- **ArtCard**: Displays artwork with styled overlays, dynamic backgrounds, and hover effects
- **HeroSection**: Main landing section with animated text effects
- **MainLayout**: Complete page shell with navigation and footer

### Data Management
- **artworks.ts**: Central data store for all artwork information including metadata (title, description, category, technique, year, dimensions)
- Static imports for artwork images from `/src/assets/img/`
- Predefined categories: 'Grotesco', 'Expresionismo', 'Abstracto', 'Figurativo', 'Mixto'

## Styling System

### Custom Color Palette
The project uses a custom TailwindCSS color palette inspired by the artist's work:
- Primary colors: `shadow-black`, `blood-red`, `flesh`, `toxic-orange`
- Accent colors: `bruise-purple`, `night-blue`, `absinthe`, `rust-red`
- Utility colors: `clown-white`, `sick-yellow`, `gray-blue`

### Visual Effects
- Custom background textures using SVG data URIs (`texture-noise`, `brush-stroke`)
- Brutal design system with hard shadows (`shadow-brutal`)
- Inner glow effects for artwork cards
- CSS animations for pulse effects

### Typography
- **Display font**: Oswald for headings and branding
- **Body font**: Inter for readable text
- **Grotesque font**: Playfair Display for decorative elements
- Text shadows and distortion effects for expressionist styling

## File Structure Conventions

```
/src
├── components/     # Reusable UI components
├── pages/         # Route-based page components  
├── layouts/       # Layout wrapper components
├── data/          # Static data and content
├── assets/        # Images and static resources
│   └── img/       # Artwork images
└── hooks/         # Custom React hooks (currently empty)
```

## Key Technical Details

- Uses ES modules (`"type": "module"` in package.json)
- TypeScript with strict configuration
- Vite for fast development and building
- TailwindCSS with PostCSS for styling
- React Router DOM for client-side routing
- No external UI library dependencies - fully custom components

## Artwork Management

When adding new artworks:
1. Add image to `/src/assets/img/`
2. Import image in `/src/data/artworks.ts`  
3. Add artwork object to `artworks` array with complete metadata
4. Ensure category matches predefined categories array

## Browser Support

Built with modern React 19 and ES modules, targeting modern browsers with native ES module support.