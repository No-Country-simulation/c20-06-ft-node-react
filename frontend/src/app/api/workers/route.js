import { NextResponse } from "next/server";
import workers from "./workers.json";

export async function GET() {
  return NextResponse.json(workers);
}