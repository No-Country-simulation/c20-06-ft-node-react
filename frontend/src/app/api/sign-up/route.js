import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json()

  console.log('body', body)

  return NextResponse.json({
    message: 'Usuario creado',
    email: body.email
  }, { status: 201 })
}