import styles from './styles.module.css'

const TextInput = ({ value = null, onChange = null, type = 'text', className = null, required = false, placeholder, name = null, error = false }) => {
  return (
    <input className={`${styles.input} ${className}`} style={error ? { borderColor: 'red' } : {}} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} />
  )
}

export default TextInput