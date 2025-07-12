import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const errorData = await request.json();

    // Log to server console (visible in Vercel function logs)
    console.error("🚨 CLIENT ERROR REPORT:", {
      timestamp: new Date().toISOString(),
      ...errorData,
      userAgent: request.headers.get("user-agent"),
      ip:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip"),
      referer: request.headers.get("referer"),
    });

    // Here you could send to external logging services like:
    // - Sentry
    // - LogRocket
    // - Datadog
    // - New Relic
    // - Or your own logging service

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error logging endpoint failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
