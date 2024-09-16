"use client"
import { useState, useMemo } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { useFetchWorkers } from '@/utils/hooks';
import { WorkerCard, WorkerModal } from '@/components'

import styles from './styles.module.css'

const Servicio = () => {
  const [selectedWorker, setSelectedWorker] = useState(null);

  const openModal = (worker) => {
    setSelectedWorker(worker);
  };

  const closeModal = () => {
    setSelectedWorker(null);
  };

  const searchParams = useSearchParams();
  const service = usePathname().split('/')[2];
  const city = searchParams.get('city') || '';

  const workers = useFetchWorkers()

  const filteredWorkers = useMemo(() => {
    return workers?.filter((worker) =>
      worker.city.toLowerCase() === city.toLowerCase() &&
      worker.services.some((services) => services.toLowerCase() === service.toLowerCase())
    )
  }, [workers, city, service]);


  return (
    <main className={styles.main}>
      Resultados para servicios de {service.split('-').join(' ')} en {city}
      <section className={styles.workersContainer}>
        {
          filteredWorkers?.length === 0
            ? <p>No se encontraron resultados</p>
            : filteredWorkers?.sort((a, b) => b.rating - a.rating).map((worker) => (
              <div key={worker.id} onClick={() => openModal(worker)}>
                <WorkerCard worker={worker} />
              </div>
            ))
        }

        {
          selectedWorker && (
            <WorkerModal
              isOpen={Boolean(selectedWorker)}
              onClose={closeModal}
              worker={selectedWorker}
              service={service}
            />
          )
        }

      </section>
    </main>
  );
};

export default Servicio;
