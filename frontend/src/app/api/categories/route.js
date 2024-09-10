import { NextResponse } from 'next/server';
import categories from './categories.json';

export async function GET() {
  return NextResponse.json(categories);
}