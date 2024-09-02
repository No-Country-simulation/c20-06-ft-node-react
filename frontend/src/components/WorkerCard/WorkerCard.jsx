import styles from './styles.module.css'

const WorkerCard = ({ worker }) => {
  return (
    <div className={styles.workerCard}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          {worker.name[0]}{worker.lastName[0]}
        </div>
      </div>
      <div className={styles.info}>
        <p>Nombre: {worker.name} {worker.lastName}</p>
        <p>Puntuacion: {worker.rating} ⭐</p>
        <p>Reseñas: {worker.reviewsCount}</p>
      </div>
    </div>
  )
}

export default WorkerCard