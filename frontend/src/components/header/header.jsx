import Link from "next/link"
import { Button } from '@/components'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/" className={styles.link}>
          Nombre<span style={{ color: 'blue' }}>App</span>
        </Link>
      </div>
      <div className={styles.login}>
        <Button className={styles.signUp}>
          <Link href="/sign-up" className={styles.link}>
            Crear cuenta
          </Link>
        </Button>

        <Button className={styles.signIn}>
          <Link href='/sign-in' className={styles.link}>
            Iniciar sesion
          </Link>
        </Button>
      </div>
    </header>
  )
}

export default Header