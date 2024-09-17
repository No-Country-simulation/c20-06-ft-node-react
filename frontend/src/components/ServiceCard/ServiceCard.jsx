import styles from "./styles.module.css"
import Link from "next/link"

const ServiceCard = ({ service, query = null, className = '' }) => {

  const normalizeTitle = (title) => {
    return title
      .normalize("NFD") // Normaliza el texto
      .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
      .toLowerCase(); // Convierte a minúsculas
  }

  const link = query
    ? `/service/${normalizeTitle(service.title)}?city=${query.city}`
    : `/service/${normalizeTitle(service.title)}`

  return (
    <button
      className={
        className
          ? `${styles.card} ${className}`
          : styles.car
      }>
      <Link className={styles.link} href={link}>
        {service.title}
      </Link>
    </button>
  )
}

export default ServiceCard