import styles from "./styles.module.css"

const TextInput = ({label, rows, placeholder, error}) => {
    return (
        <div className={styles.textAreaInput}>
            <label htmlFor={label.replace(" ","")}>{label}</label>
            <textarea 
                name=""
                id={label.replace(" ","")}
                placeholder={placeholder}
                rows={rows}
            >
            </textarea>
            {error ? <p>{error}</p>: null}
        </div>
    )
}

export default TextInput