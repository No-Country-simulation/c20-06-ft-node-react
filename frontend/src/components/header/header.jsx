"use client"
import { useState } from 'react'
import Link from "next/link"
import { Button } from '@/components'
import styles from './styles.module.css'

const Header = () => {
  const [isLoged, setIsLoged] = useState(true)

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/" className={styles.link}>
          Changas<span style={{ color: 'blue' }}>App</span>
        </Link>
      </div>

      <div className={styles.login}>
        {
          isLoged
            ? <Button onClick={() => setIsLoged(false)}>LogOut</Button>
            : (
              <>
                <Button className={styles.signUp} onClick={() => setIsLoged(true)}>
                  <Link href="/" className={styles.link}>
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
      </div>
    </header>
  )
}

export default Header