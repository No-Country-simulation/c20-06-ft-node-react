import styles from "./styles.module.css"

const DropDownInput = (props) => {
  return (
    <div className={styles.dropDownInput}>
      <label htmlFor={props.label.replace(" ", "")}>{props.label}</label>
      <select
        id={props.label.replace(" ", "")}
      >
        <option value="" disabled selected>
          {props.placeholder} (ninguno)
        </option>
        {
          props.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)
        }
      </select>
      {props.error ? <p>{props.error}</p> : null}
    </div>
  )
}

export default DropDownInput