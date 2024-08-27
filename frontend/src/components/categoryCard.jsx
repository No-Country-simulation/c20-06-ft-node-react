import styles from "./categoryCard.module.css"
import Link from "next/link"

const categoryCard = ({ category }) => {
  const link = `/service/${category.to}`
  return (
    <button className={styles.card}>
      <Link href={link}>
        <p>{category.name}</p>
      </Link>
    </button>
  )
}

export default categoryCard