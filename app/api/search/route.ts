import { NextResponse } from "next/server";
import { searchMovies } from "@/services/movieApi";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json([]);
  }

  const data = await searchMovies(query);

  return NextResponse.json(data.results);
}