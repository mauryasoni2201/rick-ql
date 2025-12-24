# RickQL

Explore the Rick and Morty universe using the public GraphQL API. Browse characters and episodes, view details, and save your favorite characters.

---

## Features

- Browse characters and episodes
- Search and filter results
- Detail pages (character, episode, location)
- Like characters (saved locally)

---

## Tech Stack

- React (Create React App)
- React Router
- Apollo Client + GraphQL
- Zustand (favorites)

---

## Pages

- **Home** (`/`): Shows a banner and previews of characters and episodes.
- **Characters** (`/characters`): Browse all characters with filters (status, gender), search by name, and pagination. Like/unlike characters.
- **Character Detail** (`/characters/:id`): View character info (status/species/gender/origin/location), episodes the character appears in, and link to their location.
- **Episodes** (`/episodes`): Browse all episodes with search by name and pagination.
- **Episode Detail** (`/episodes/:id`): View episode metadata and the list of characters appearing in the episode.
- **Location Detail** (`/location/:id`): View location metadata and the characters last seen there.
- **Liked Characters** (`/liked-characters`): View your liked characters with pagination and remove from favorites.

---

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm (or yarn)

### Setup

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd rick-ql

# 2. Install dependencies
npm install
```

### Environment

Create a `.env` file in the project root:

```bash
REACT_APP_API_URL=https://rickandmortyapi.com/graphql
```

### Run locally

```bash
npm start
```
The app runs on `http://localhost:3000`.

### Production build

```bash
npm run build
```