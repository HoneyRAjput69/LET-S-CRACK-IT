import { NextResponse } from "next/server";
import { ensureSeeded } from "@/db/seed";
import { getStats } from "@/lib/queries";

export async function GET() {
  await ensureSeeded();
  return NextResponse.json(await getStats());
}
