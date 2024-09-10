"use client"
import { useState } from 'react';
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


  const workers = useFetchWorkers();

  const searchParams = useSearchParams();
  const service = usePathname().split('/')[2];
  const city = searchParams.get('city') || '';

  const filteredWorkers = workers?.filter((worker) =>
    worker.city.toLowerCase() === city.toLowerCase() &&
    worker.services.some((services) => services.toLowerCase() === service.toLowerCase())
  );


  return (
    <main className={styles.main}>
      Resultados para servicios de {service.split('-').join(' ')} en {city}
      <div className={styles.workersContainer}>
        {
          filteredWorkers?.length === 0
            ? <p>No se encontraron resultados</p>
            : filteredWorkers?.map((worker) => (
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

      </div>
    </main>
  );
};

export default Servicio;
