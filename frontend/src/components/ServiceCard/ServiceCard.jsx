import styles from "./styles.module.css"
import Link from "next/link"

const ServiceCard = ({ service, query = null }) => {
  const link = query ? `/service${service.to}?city=${query.city}` : `/service${service.to}`
  return (
    <button className={styles.card}>
      <Link className={styles.link} href={link}>
        {service.name}
      </Link>
    </button>
  )
}

export default ServiceCard