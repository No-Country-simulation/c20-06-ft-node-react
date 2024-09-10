async function getWorkerData(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/workers/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching worker data:', error);
    return null;
  }
}

export default async function WorkerPage({ params }) {
  const { id } = params;
  const worker = await getWorkerData(id);

  if (!worker) {
    return <p>No se encontró al trabajador.</p>;
  }

  return (
    <div>
      <h1>{worker.name} {worker.lastName}</h1>
      <p>Rating: {worker.rating}</p>
      <p>Reseñas: {worker.reviewsCount}</p>
      <p>Ciudad: {worker.city}</p>
      <p>Servicios: {worker.services.join(', ')}</p>
      <p>{worker.description}</p>
    </div>
  );
}

