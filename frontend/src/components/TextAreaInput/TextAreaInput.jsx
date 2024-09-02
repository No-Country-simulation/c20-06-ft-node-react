import styles from "./styles.module.css"

const TextInput = (props) => {
    return (
        <div className={styles.textAreaInput}>
            <label htmlFor={props.label.replace(" ","")}>{props.label}</label>
            <textarea 
                name=""
                id={props.label.replace(" ","")}
                placeholder={props.placeholder}
                rows={props.rows}
            >
            </textarea>
            {props.error ? <p>{props.error}</p>: null}
        </div>
    )
}

export default TextInput