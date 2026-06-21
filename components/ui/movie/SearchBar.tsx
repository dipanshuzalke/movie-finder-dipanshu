"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(
      `/search?q=${encodeURIComponent(query)}`
    );
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative"
    >
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />

      <input
        type="text"
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        placeholder="Search movies..."
        className="w-82 rounded-full border border-zinc-700 bg-zinc-900 py-2 pl-10 pr-4 text-sm text-white outline-none transition focus:border-red-500"
      />
    </form>
  );
}