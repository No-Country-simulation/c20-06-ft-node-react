import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    "categories": [
      { "id": 1, "name": "Hogar" },
      { "id": 2, "name": "Belleza" },
      { "id": 3, "name": "Construcción" },
      { "id": 4, "name": "Tecnología" },
      { "id": 5, "name": "Jardinería" },
      { "id": 6, "name": "Automotriz" },
      { "id": 7, "name": "Climatización" },
      { "id": 8, "name": "Mudanzas y Transporte" },
      { "id": 9, "name": "Seguridad" },
      { "id": 10, "name": "Limpieza" },
      { "id": 11, "name": "Eventos" },
      { "id": 12, "name": "Mascotas" },
      { "id": 13, "name": "Reparaciones" },
      { "id": 14, "name": "Educación" },
      { "id": 15, "name": "Salud" },
      { "id": 16, "name": "Artes y Entretenimiento" },
      { "id": 17, "name": "Comida" }
    ]
  });
}