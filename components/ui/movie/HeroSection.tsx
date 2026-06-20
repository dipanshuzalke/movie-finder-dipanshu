"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Movie } from "@/types/movie";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HeroSectionProps {
  movies: Movie[];
}

export default function HeroSection({
  movies,
}: HeroSectionProps) {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  );

  return (
    <section className="relative w-full">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="basis-full"
            >
              <div className="relative h-[80vh] w-full">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  className="h-full w-full object-cover rounded-2xl"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-2xl px-6 md:px-12 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {movie.title}
                    </h1>

                    <p className="text-gray-200 text-sm md:text-lg mb-6 line-clamp-3">
                      {movie.overview}
                    </p>

                    <div className="flex gap-4">
                      <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold">
                        Watch Now
                      </button>

                      <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition">
                        More Info
                      </button>
                    </div>

                    <div className="mt-4 text-yellow-400 font-medium">
                      ⭐ {movie.vote_average.toFixed(1)}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}