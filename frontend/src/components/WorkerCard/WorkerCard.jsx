import styles from './styles.module.css'

const WorkerCard = ({ worker }) => {
  return (
    <article className={styles.workerCard}>
      <figure className={styles.imageContainer}>
        <div className={styles.image}>
          {worker.name[0]}{worker.lastName[0]}
        </div>
      </figure>
      <section className={styles.info}>
        <p>Nombre: {worker.name} {worker.lastName}</p>
        <p>Puntuacion: {worker.rating} ⭐</p>
        <p>Reseñas: {worker.reviewsCount}</p>
      </section>
    </article>
  )
}

export default WorkerCard