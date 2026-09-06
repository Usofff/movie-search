# Movie Search

Single-page movie search application built with vanilla JavaScript — no UI framework.
Search films, browse results in a slider, and keep a personal list of favorites
that survives page reloads.

## Features

- Movie search with results rendered as cards
- Favorites list persisted in browser storage
- Client-side routing between views
- Responsive layout

## Tech stack

JavaScript (ES6+) · SASS · Webpack · OMDb API

## Architecture

The app is assembled from independent components, each owning its own markup and
behaviour, on top of a thin service layer:

- `src/js/components/` — UI components (card, cards container, search bar, swiper, favorites, header, footer)
- `src/js/core/api/` — API layer, all network calls live here
- `src/js/services/router/` — client-side router
- `src/js/services/storageService/` — storage abstraction; components never touch localStorage directly
- `src/sass/` — styles split into `base/` and `components/`

The storage service exists so that the persistence mechanism can be swapped without
touching component code.

## Getting started

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```
