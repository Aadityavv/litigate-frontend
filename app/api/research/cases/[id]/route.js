import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const caseDetails = { id, name: "Research Case", data: "Details of the case" };
  return NextResponse.json(caseDetails);
}
