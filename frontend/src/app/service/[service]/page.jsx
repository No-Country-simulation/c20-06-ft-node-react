"use client"
import { useSearchParams, usePathname } from 'next/navigation';
import { useFetchWorkers } from '@/utils/hooks';
import { WorkerCard } from '@/components'

import styles from './styles.module.css'

const Servicio = () => {
  const workers = useFetchWorkers();

  const searchParams = useSearchParams();
  const city = searchParams.get('city') || '';
  const service = usePathname().split('/')[2];

  return (
    <div className={styles.container}>
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
