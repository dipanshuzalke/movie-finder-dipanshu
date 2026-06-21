"use client";

import Link from "next/link";
import { Film, Menu, X } from "lucide-react";
import { useState } from "react";

import SearchBar from "../movie/SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 md:px-10 lg:px-18">

        {/* Left */}
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Film className="h-7 w-7 text-red-600" />

            <span className="text-xl md:text-2xl font-bold text-red-600">
              MovieTime
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
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

        {/* Desktop Search */}
        <div className="hidden lg:block">
          <SearchBar />
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <button className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
            Sign In
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="md:hidden text-white"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-black">
          <div className="space-y-4 px-4 py-4">

            <SearchBar />

            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() =>
                  setIsOpen(false)
                }
                className="text-zinc-300 hover:text-white"
              >
                Movies
              </Link>

              <Link
                href="/favorites"
                onClick={() =>
                  setIsOpen(false)
                }
                className="text-zinc-300 hover:text-white"
              >
                Favorites
              </Link>
            </nav>

            <button className="w-full rounded-lg bg-red-600 py-2 font-medium text-white hover:bg-red-700">
              Sign In
            </button>

          </div>
        </div>
      )}
    </header>
  );
}