"use client"
import { Button, useAuth } from '@/components'

import Link from "next/link"

import styles from './styles.module.css'

const Header = () => {
  const { isLoggedIn, logOut } = useAuth()

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/" className={styles.link}>
          Changas<span style={{ color: 'blue' }}>App</span>
        </Link>
      </div>

      <nav className={styles.login}>
        {
          isLoggedIn
            ? <Button onClick={logOut}>LogOut</Button>
            : (
              <>
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
              </>
            )
        }
      </nav>
    </header>
  )
}

export default Header