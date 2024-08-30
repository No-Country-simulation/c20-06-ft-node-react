import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json()

  console.log('body', body)

  return NextResponse.json({
    status: 201,
    message: 'Usuario creado',
    email: body.email
  })
}