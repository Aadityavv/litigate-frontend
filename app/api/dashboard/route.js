import { NextResponse } from "next/server";

export async function GET(req) {
  const dashboardData = {
    statistics: { cases: 42, documents: 120, insights: 10 },
    recentActivities: [
      { id: 1, activity: "Updated Case 123", timestamp: "2024-12-23" },
    ],
  };
  return NextResponse.json(dashboardData);
}
