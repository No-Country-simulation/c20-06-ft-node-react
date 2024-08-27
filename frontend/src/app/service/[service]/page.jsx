"use client";
import { useParams } from 'next/navigation';

const Servicio = () => {
  const { service } = useParams();

  return <div>Service: {service}</div>;
};

export default Servicio;
