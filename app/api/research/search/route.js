import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");
  const results = query
    ? [{ id: 1, name: "Search Result 1", relevance: 95 }]
    : [];
  return NextResponse.json({ query, results });
}
