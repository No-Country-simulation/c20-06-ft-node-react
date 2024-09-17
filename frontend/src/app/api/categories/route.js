import { NextResponse } from 'next/server';
import { fetchAllData } from '@/utils/functions'

export async function GET() {
  const { data, status, error } = await fetchAllData('http://localhost:3000/categories')

  if (error) return NextResponse.json({ error }, { status: 500 })

  return NextResponse.json({ categories: data.categories }, { status })
}