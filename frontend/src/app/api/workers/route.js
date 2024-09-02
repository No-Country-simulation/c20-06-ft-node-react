import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      "workers": [
        {
          "name": "Juan",
          "lastName": "Perez",
          "rating": 4.5,
          "reviewsCount": 120,
          "city": "Buenos Aires"
        },
        {
          "name": "María",
          "lastName": "Gonzalez",
          "rating": 4.7,
          "reviewsCount": 95,
          "city": "Cordoba"
        },
        {
          "name": "Carlos",
          "lastName": "Fernandez",
          "rating": 4.2,
          "reviewsCount": 85,
          "city": "Rosario"
        },
        {
          "name": "Ana",
          "lastName": "Lopez",
          "rating": 4.9,
          "reviewsCount": 150,
          "city": "Buenos Aires"
        },
        {
          "name": "Luis",
          "lastName": "Martinez",
          "rating": 3.8,
          "reviewsCount": 60,
          "city": "Mendoza"
        },
        {
          "Name": "Laura",
          "lastName": "Rodriguez",
          "rating": 4.3,
          "reviewsCount": 110,
          "city": "La Plata"
        }
      ]
    });
}