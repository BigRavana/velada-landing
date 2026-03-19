import { NextResponse } from "next/server";
import { fighters } from "@/data/fighters";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    {
      data: fighters,
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
