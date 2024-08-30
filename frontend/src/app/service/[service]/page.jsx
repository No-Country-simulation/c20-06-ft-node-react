"use client"
import { useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'
import { WorkerCard, Sidebar } from '@/components'

import styles from './styles.module.css'

const Servicio = () => {
  const [worker, setWorker] = useState([]);
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);

  const searchParams = useSearchParams();
  const city = searchParams.get('city');
  const service = usePathname().split('/')[2];

  useEffect(() => {
    fetch('/api/workers')
      .then(res => res.json())
      .then(data => setWorker(data.workers))

    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data.categories))

    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data.services))
  }, [])

  return (
    <div className={styles.container}>
      <Sidebar services={services} categories={categories} city={city} />
      <main className={styles.main}>
        Resultados para servicios de {service} en {city}
        <div className={styles.workersContainer}>
          {
            worker && worker.filter((worker) => worker.city.toLowerCase() === city.toLocaleLowerCase()).map((worker) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))
          }
        </div>
      </main>
    </div>
  );
};

export default Servicio;
