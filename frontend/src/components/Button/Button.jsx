import styles from './Button.module.css'

const Button = ({ children, onClick, className = null }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}> { children }</button >
  )
}

export default Button