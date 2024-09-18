import { NextResponse } from 'next/server';
import { fetchAllData } from '@/utils/functions'

export async function GET() {
  const { data, status, error } = await fetchAllData('http://localhost:3000/locations');

  if (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 500 });
  }

  const uniqueCities = Array.from(
    new Set(data.locations.map(city => city.localidad))
  )
    .map(localidad => {
      return data.locations.find(city => city.localidad === localidad);
    });


  let cities = uniqueCities?.sort((a, b) => a.localidad.localeCompare(b.localidad));

  cities = cities?.map(city => {
    if (city.provincia === 'Provincia Buenos Aires') {
      return {
        ...city,
        provincia: 'Buenos Aires'
      }
    }
    return city
  })


  console.log(cities)

  return NextResponse.json({ cities }, { status });
}