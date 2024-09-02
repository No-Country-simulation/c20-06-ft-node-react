"use client"
import { useSearchParams, usePathname } from 'next/navigation';
import { useFetchWorkers } from '@/utils/hooks';
import { WorkerCard } from '@/components'

import styles from './styles.module.css'

const Servicio = () => {
  const workers = useFetchWorkers();

  const searchParams = useSearchParams();
  const service = usePathname().split('/')[2];
  const city = searchParams.get('city') || '';

  return (
    <main className={styles.main}>
      Resultados para servicios de {service.split('-').join(' ')} en {city}
      <div className={styles.workersContainer}>
        {
          workers &&
          workers
            .filter((worker) =>
              worker.city.toLowerCase() === city.toLocaleLowerCase()
            )
            .map((worker) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))
        }
      </div>
    </main>
  );
};

export default Servicio;
