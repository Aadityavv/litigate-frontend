import { NextResponse } from "next/server";

export async function PUT(req) {
  const settings = await req.json();
  return NextResponse.json({
    message: "Notification settings updated",
    updatedSettings: settings,
  });
}
