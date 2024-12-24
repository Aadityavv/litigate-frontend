import { NextResponse } from "next/server";

export async function POST(req) {
  const bookmark = await req.json();
  return NextResponse.json({ message: "Bookmark saved successfully", bookmark });
}
