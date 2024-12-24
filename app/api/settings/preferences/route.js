import { NextResponse } from "next/server";

export async function PUT(req) {
  const preferences = await req.json();
  return NextResponse.json({
    message: "Preferences updated successfully",
    updatedPreferences: preferences,
  });
}
