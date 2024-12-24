import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const history = [
    { timestamp: "2024-12-20", action: "Case created" },
    { timestamp: "2024-12-21", action: "Document added" },
  ];
  return NextResponse.json({ caseId: id, history });
}
