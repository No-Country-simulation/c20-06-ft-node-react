import { NextResponse } from 'next/server';
import { fetchAllData } from '@/utils/functions'

export async function GET() {
  const { data, status, error } = await fetchAllData('http://localhost:3000/services');

  if (error) return NextResponse.json({ error }, { status: 500 });

  const { services } = data

  console.log(services[0])

  return NextResponse.json({ services }, { status });
}