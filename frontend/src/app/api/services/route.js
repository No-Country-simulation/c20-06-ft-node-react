import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    "services": [
      { id: 1, name: "⚡ Electricista", to: "/electricista" },
      { id: 2, name: "🔨 Plomero", to: "/plomero" },
      { id: 3, name: "🪵 Carpintero", to: "/carpintero" },
      { id: 4, name: "🔧 Mecánico", to: "/mecanico" },
      { id: 5, name: "🎨 Pintor", to: "/pintor" },
      { id: 6, name: "🛠️ Albañil", to: "/albanil" },
      { id: 7, name: "🧹 Limpiador", to: "/limpiador" },
      { id: 8, name: "🪓 Herrero", to: "/herrero" },
      { id: 9, name: "🚚 Mudanzas", to: "/mudanzas" },
      { id: 10, name: "🛋️ Tapicero", to: "/tapicero" },
      { id: 11, name: "🚧 Constructor", to: "/constructor" },
      { id: 12, name: "🧑‍🔧 Técnico", to: "/tecnico" },
      { id: 13, name: "🔌 Instalador de redes", to: "/instalador-de-redes" },
      { id: 14, name: "🚿 Fontanero", to: "/fontanero" },
      { id: 15, name: "🌳 Jardinero", to: "/jardinero" },
      { id: 16, name: "🧱 Albañil de interiores", to: "/albanil-de-interiores" },
      { id: 17, name: "🏗️ Ingeniero civil", to: "/ingeniero-civil" },
      { id: 18, name: "🛠️ Técnico de electrodomésticos", to: "/tecnico-de-electrodomesticos" },
      { id: 19, name: "🧰 Mantenimiento general", to: "/mantenimiento-general" },
      { id: 20, name: "🎸 Luthier", to: "/luthier" }
    ]
  });
}