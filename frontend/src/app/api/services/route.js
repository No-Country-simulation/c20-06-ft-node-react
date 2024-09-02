import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    "services": [
      { id: 1, name: "⚡ Electricista", to: "/electricista", categories: ["Hogar", "Construcción"] },
      { id: 2, name: "🔨 Plomero", to: "/plomero", categories: ["Hogar", "Construcción"] },
      { id: 3, name: "🪵 Carpintero", to: "/carpintero", categories: ["Construcción", "Hogar"] },
      { id: 4, name: "🔧 Mecánico", to: "/mecanico", categories: ["Automotriz"] },
      { id: 5, name: "🎨 Pintor", to: "/pintor", categories: ["Hogar", "Construcción"] },
      { id: 6, name: "🛠️ Albañil", to: "/albanil", categories: ["Construcción"] },
      { id: 7, name: "🧹 Limpiador", to: "/limpiador", categories: ["Limpieza"] },
      { id: 8, name: "🪓 Herrero", to: "/herrero", categories: ["Construcción"] },
      { id: 9, name: "🚚 Mudanzas", to: "/mudanzas", categories: ["Mudanzas y Transporte"] },
      { id: 10, name: "🛋️ Tapicero", to: "/tapicero", categories: ["Hogar"] },
      { id: 11, name: "🚧 Constructor", to: "/constructor", categories: ["Construcción"] },
      { id: 12, name: "🔧 Técnico", to: "/tecnico", categories: ["Tecnología", "Reparaciones"] },
      { id: 13, name: "🔌 Instalador de redes", to: "/instalador-de-redes", categories: ["Tecnología"] },
      { id: 14, name: "🚿 Fontanero", to: "/fontanero", categories: ["Construcción", "Hogar"] },
      { id: 15, name: "🌳 Jardinero", to: "/jardinero", categories: ["Jardinería"] },
      { id: 16, name: "🧱 Albañil de interiores", to: "/albanil-de-interiores", categories: ["Construcción", "Hogar"] },
      { id: 17, name: "🏗️ Ingeniero civil", to: "/ingeniero-civil", categories: ["Construcción"] },
      { id: 18, name: "🛠️ Técnico de electrodomésticos", to: "/tecnico-de-electrodomesticos", categories: ["Tecnología", "Reparaciones"] },
      { id: 19, name: "🧰 Mantenimiento general", to: "/mantenimiento-general", categories: ["Hogar", "Reparaciones"] },
      { id: 20, name: "🎸 Luthier", to: "/luthier", categories: ["Artes y Entretenimiento"] }
    ]
  });
}