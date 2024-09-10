"use client"
import { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'
import { Button } from '@/components'

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    'https://placehold.co/600x400/png',
    'https://placehold.co/600x500/png',
    'https://placehold.co/600x300/png'
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button onClick={handlePrev} className={styles.navButton}></button>
      <div className={styles.imageWrapper}>
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
        />
      </div>
      <button onClick={handleNext} className={styles.navButton}></button>
    </div>
  )
}

const WorkerModal = ({ isOpen, onClose, worker, service, className = '' }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.closeButtonContainer}>
          <button className={styles.closeButton} onClick={onClose}>X</button>
        </div>

        <figure className={styles.imageContainer}>
          {
            worker.picture
              ? <Image src={worker.picture} alt={worker.name} />
              : <div className={styles.image}>
                {worker.name[0]}{worker.lastName[0]}
              </div>
          }
        </figure>

        <h2 className={styles.title}>{worker.name} {worker.lastName} - {service.charAt(0).toUpperCase() + service.slice(1).toLowerCase()}</h2>

        <div className={styles.info}>
          <p className={styles.description}>Puntuacion: {worker.rating} ⭐</p>
          <p className={styles.description}>Reseñas: {worker.reviewsCount}</p>
          <p className={styles.description}>{worker.description}</p>
        </div>

        <Carrousel images={worker.images} />

        <Button className={styles.button}>
          <Link href={`/user/worker/${worker.id}`} className={styles.link}>
            Ver perfil
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default WorkerModal