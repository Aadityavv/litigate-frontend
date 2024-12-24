import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  return NextResponse.json({ message: `Feedback ${id} resolved successfully` });
}
