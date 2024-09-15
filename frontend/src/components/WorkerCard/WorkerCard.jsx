import Image from 'next/image'
import styles from './styles.module.css'

const WorkerCard = ({ worker, onClick }) => {
  return (
    <article className={styles.workerCard} onClick={()=>{
      onClick()
    }}>
      <figure className={styles.imageContainer}>
        {
          worker.picture
            ? <Image src={worker.picture} alt={worker.name} />
            : <div className={styles.image}>
              {worker.name[0]}{worker.lastName[0]}
            </div>
        }
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