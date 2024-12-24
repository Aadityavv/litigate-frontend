import { NextResponse } from "next/server";

export async function GET(req) {
  const securitySettings = { twoFactorEnabled: true };
  return NextResponse.json(securitySettings);
}
