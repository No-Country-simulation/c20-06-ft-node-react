import styles from './WorkerCard.module.css'

const WorkerCard = ({ worker }) => {
  return (
    <div className={styles.workerCard}>
      <p>Nombre: {worker.name}</p>
      <p>Puntuacion: {worker.rating}</p>
      <p>Reseñas: {worker.reviewsCount}</p>
    </div>
  )
}

export default WorkerCard