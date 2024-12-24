import { NextResponse } from "next/server";

export async function GET(req) {
  const notifications = [
    { id: 1, message: "New document uploaded", timestamp: "2024-12-22" },
    { id: 2, message: "Case 456 updated", timestamp: "2024-12-23" },
  ];
  return NextResponse.json(notifications);
}
