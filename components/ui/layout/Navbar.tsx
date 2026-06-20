"use client";

import Link from "next/link";
import { Search, Film } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 md:px-18">
        <div className="flex gap-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Film className="h-7 w-7 text-red-600" />
            <span className="text-2xl font-bold text-white">MovieTime</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              Movies
            </Link>

            <Link
              href="/favorites"
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              Favorites
            </Link>
          </nav>
        </div>

        {/* Search */}
        <div className="hidden lg:flex items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />

            <input
              type="text"
              placeholder="Search movies..."
              className="w-82 rounded-full border border-zinc-700 bg-zinc-900 py-2 pl-10 pr-4 text-sm text-white outline-none transition focus:border-red-500"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
