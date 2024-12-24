import { NextResponse } from "next/server";

export async function GET(req) {
  const feedbackList = [
    { id: 1, message: "Great app!", timestamp: "2024-12-20" },
  ];
  return NextResponse.json(feedbackList);
}

export async function POST(req) {
  const feedback = await req.json();
  return NextResponse.json({
    message: "Feedback submitted successfully",
    feedback,
  });
}
