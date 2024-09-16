import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    console.log('body', email, password)

    if (!email || !password) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    const login = {
      status: 200,
      message: 'Login exitoso',
      token: 123456789
    }

    return NextResponse.json(login);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error al iniciar sesión' }, { status: 500 });
  }
}