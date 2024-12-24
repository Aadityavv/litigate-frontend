import { NextResponse } from "next/server";

export async function GET(req) {
  const conversations = [
    { id: 1, participants: ["User A", "User B"], lastMessage: "Hello!" },
  ];
  return NextResponse.json(conversations);
}
