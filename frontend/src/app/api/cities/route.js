import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch("http://localhost:3000/api/workers");
  const { workers } = await response.json();

  const uniqueCities = Array.from(new Set(workers.map(worker => worker.city))).map((city, index) => {
    return { name: city, id: index };
  });

  return NextResponse.json({ cities: uniqueCities });
}