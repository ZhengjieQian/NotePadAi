import { NextResponse } from "next/server";

export async function GET() {
  const hasGoogleClientId = Boolean(process.env.GOOGLE_CLIENT_ID);
  const hasGoogleClientSecret = Boolean(process.env.GOOGLE_CLIENT_SECRET);
  const hasNextAuthSecret = Boolean(process.env.NEXTAUTH_SECRET);

  return NextResponse.json({
    ok: true,
    hasGoogleClientId,
    hasGoogleClientSecret,
    hasNextAuthSecret,
  });
}
