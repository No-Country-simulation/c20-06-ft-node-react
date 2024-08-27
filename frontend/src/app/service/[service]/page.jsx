"use client";

import { usePathname } from 'next/navigation';

const Servicio = () => {
  const path = usePathname().split("/")[2];

  return <div>Service: {path}</div>;
};

export default Servicio;
