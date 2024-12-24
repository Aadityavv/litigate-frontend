import { NextResponse } from "next/server";

export async function GET(req) {
  // Simulated database query for bookmarked items
  const bookmarkedResources = [
    {
      id: 1,
      title: "Landmark Case: Roe v. Wade",
      description: "A significant decision on constitutional rights.",
      bookmarkedAt: "2024-12-01",
    },
    {
      id: 2,
      title: "Statutory Interpretation of Contract Law",
      description: "Analyzing key provisions under the Indian Contract Act.",
      bookmarkedAt: "2024-12-20",
    },
  ];

  // Return response with bookmarked items
  return NextResponse.json(bookmarkedResources);
}
