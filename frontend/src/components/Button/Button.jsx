import styles from './Button.module.css'

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button onClick={onClick} className={className ? `${className} ${styles.button}` : styles.button}> {children}</button >
  )
}

export default Button