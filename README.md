# 🎬 MovieTime – Movie Discovery App

MovieTime is a modern Movie Discovery App built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. The application integrates with **The Movie Database (TMDb) API** and allows users to browse popular movies, search in real-time, view detailed movie information, save favorites, and discover similar movies.

---

## 🚀 Live Demo

**Live Application:** https://movie-finder-dipanshu.vercel.app/

---

## Features

### Browse Movies

* View popular movies fetched from TMDb.
* Responsive movie grid layout.
* Manual pagination using shadcn/ui Pagination.

### Search Movies

* Real-time movie search.
* Debounced API requests for better performance.

### Movie Details

* Detailed movie information page.
* Movie poster and overview.
* Release year, runtime, genres, rating, and vote count.
* Director information.

### Favorites

* Add, remove movies to favorites.
* Favorites stored in localStorage.

---

## Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_TMDB_API_KEY=9a3b7a578ecf71e55fc8eb164a594e3c
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
```

---

## Installation

Clone the repository:

```bash
git clone "https://github.com/dipanshuzalke/movie-finder-dipanshu.git"
```

Move into the project:

```bash
cd movie-time
```

Install dependencies:

```bash
npm install
```

---

## Running Locally

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The application should now be running locally.

---

## Built For

Built for Jeevan — Dipanshu Zalke
