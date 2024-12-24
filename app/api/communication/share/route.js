import { NextResponse } from "next/server";

export async function POST(req) {
  const document = await req.json();
  return NextResponse.json({
    message: "Document shared successfully",
    sharedDocument: document,
  });
}
