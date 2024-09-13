import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { user, password } = await request.json();

    console.log('body', user, password)

    const login = {
      status: 200,
      message: 'Login exitoso'
    }

    return NextResponse.json(login);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error al iniciar sesión' }, { status: 500 });
  }
}