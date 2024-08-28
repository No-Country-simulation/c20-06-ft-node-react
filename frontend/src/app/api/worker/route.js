import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    "workers": [
      {
        "Name": "Juan Pérez",
        "Rating": 4.5,
        "ReviewsCount": 120
      },
      {
        "Name": "María González",
        "Rating": 4.7,
        "ReviewsCount": 95
      },
      {
        "Name": "Carlos Fernández",
        "Rating": 4.2,
        "ReviewsCount": 85
      },
      {
        "Name": "Ana López",
        "Rating": 4.9,
        "ReviewsCount": 150
      },
      {
        "Name": "Luis Martínez",
        "Rating": 3.8,
        "ReviewsCount": 60
      },
      {
        "Name": "Laura Rodríguez",
        "Rating": 4.3,
        "ReviewsCount": 110
      }
    ]
  });
}