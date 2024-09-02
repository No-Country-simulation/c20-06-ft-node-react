import styles from './styles.module.css'
import '@/app/globals.css'

const LoginLayout = ({ children, className = '' }) => {
  return (
    <main className={className ? `${className} ${styles.container}` : styles.container}>
      {children}
    </main>
  )
}

export default LoginLayout