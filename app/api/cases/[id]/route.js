import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const caseDetails = { id, name: "Sample Case", status: "Active" };
  return NextResponse.json(caseDetails);
}
