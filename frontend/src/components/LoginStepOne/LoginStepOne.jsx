import { Button } from '@/components'
import Image from 'next/image'
import User from '@/assets/user.png'
import Worker from '@/assets/worker.png'
import styles from './styles.module.css'

const LoginStepOne = ({ rol, setRol, onNext }) => {
  return (
    <section className={styles.container}>
      <h1>Antes de comenzar, completa tus datos</h1>

      <form className={styles.rol}>
        <label htmlFor="rol" className={styles.label}>
          Cliente
          <input
            type='radio'
            name='rol'
            value='client'
            style={{ display: 'none' }}
          />
          <Image
            src={User}
            alt='user'
            width={100}
            height={100}
            onClick={() => setRol('client')}
            className={
              rol === 'client'
                ? `${styles.option} ${styles.selected}`
                : styles.option
            }
          />
        </label>

        <label htmlFor="rol" className={styles.label}>
          Prestador de servicios
          <input
            type='radio'
            name='rol'
            value='service_provider'
            style={{ display: 'none' }}
          />
          <Image
            src={Worker}
            alt='worker'
            width={100}
            height={100}
            onClick={() => setRol('service_provider')}
            className={
              rol === 'service_provider'
                ? `${styles.option} ${styles.selected}`
                : styles.option
            }
          />
        </label>
      </form>
      <Button className={styles.button} onClick={onNext}>Continuar</Button>
    </section>
  )
}


export default LoginStepOne