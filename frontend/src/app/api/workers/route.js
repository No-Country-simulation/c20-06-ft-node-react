import { NextResponse } from "next/server";
import { fetchAllData } from '@/utils/functions'
import workersJson from "./workers.json";

export async function GET() {
  // const { data, status, error } = await fetchAllData('http://localhost:3000/service_providers');

  // console.log(data)

  // if (error) {
  //   console.log(error)
  //   return NextResponse.json({ error }, { status: 500 })
  // };

  const { workers } = workersJson

  return NextResponse.json({ workers }, { status: 200 });
}