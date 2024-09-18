import styles from "./styles.module.css"
import Link from "next/link"
import { NormalizeText } from "@/utils/functions"

const ServiceCard = ({ service, query = null, className = '' }) => {

  const link = query
    ? `/service/${NormalizeText(service.title)}?city=${query.city}`
    : `/service/${NormalizeText(service.title)}`

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