import styles from './styles.module.css'

const TextInput = ({ value = '', onChange = null, type = 'text', className = null, required = false, placeholder, name = null, error = false }) => {
  const inputStyles = `${styles.input} ${className}`
  const borderStyles = error ? {borderColor: 'border-red-500'} : {}

  return (
    <input
      className={inputStyles}
      style={borderStyles}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required} />
  )
}

export default TextInput