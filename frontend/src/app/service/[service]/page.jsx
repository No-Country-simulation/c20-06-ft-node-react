"use client"
import { useSearchParams, usePathname } from 'next/navigation';
import { useFetchWorkers, useFetchCategories, useFetchServices } from '@/utils/hooks';
import { WorkerCard, Sidebar } from '@/components'

import styles from './styles.module.css'

const Servicio = () => {
  const workers = useFetchWorkers();
  const categories = useFetchCategories();
  const services = useFetchServices();

  const searchParams = useSearchParams();
  const city = searchParams.get('city');
  const service = usePathname().split('/')[2];

  return (
    <div className={styles.container}>
      <Sidebar services={services} categories={categories} city={city} />
      <main className={styles.main}>
        Resultados para servicios de {service} en {city}
        <div className={styles.workersContainer}>
          {
            workers &&
            workers
              .filter((worker) => worker.city.toLowerCase() === city.toLocaleLowerCase())
              .map((worker) => (
                <WorkerCard key={worker.id} worker={worker} />
              ))
          }
        </div>
      </main>
    </div>
  );
};

export default Servicio;
