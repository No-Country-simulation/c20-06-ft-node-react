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
          "city": "Buenos Aires",
          "id": 1
        },
        {
          "name": "María",
          "lastName": "Gonzalez",
          "rating": 4.7,
          "reviewsCount": 95,
          "city": "Cordoba",
          "id": 2
        },
        {
          "name": "Carlos",
          "lastName": "Fernandez",
          "rating": 4.2,
          "reviewsCount": 85,
          "city": "Rosario",
          "id": 3
        },
        {
          "name": "Ana",
          "lastName": "Lopez",
          "rating": 4.9,
          "reviewsCount": 150,
          "city": "Buenos Aires",
          "id": 4
        },
        {
          "name": "Luis",
          "lastName": "Martinez",
          "rating": 3.8,
          "reviewsCount": 60,
          "city": "Mendoza",
          "id": 5
        },
        {
          "Name": "Laura",
          "lastName": "Rodriguez",
          "rating": 4.3,
          "reviewsCount": 110,
          "city": "La Plata",
          "id": 6
        }
      ]
    });
}