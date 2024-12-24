import { NextResponse } from "next/server";

export async function POST(req) {
  const message = await req.json();
  return NextResponse.json({ message: "Message sent successfully", message });
}
