import styles from './styles.module.css'

const LoginLayout = ({ children, className = null }) => {
  return (
    <main className={`${styles.container} ${className}`}>
      {children}
    </main>
  )
}

export default LoginLayout