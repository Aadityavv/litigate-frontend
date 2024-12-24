import { NextResponse } from "next/server";

export async function POST(req) {
  const caseDetails = await req.json();
  return NextResponse.json({ message: "Case created successfully", caseDetails });
}
