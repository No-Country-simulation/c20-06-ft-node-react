'use client'
import styles from "./styles.module.css"
import React, { useState } from "react"

const DropDownInput = (props) => {

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (props.onChange) {
      props.onChange(value);
    }
  }

  return (
    <div className={styles.dropDownInput}>
      <label htmlFor={props.label.replace(" ", "")}>{props.label}</label>
      <select
        id={props.label.replace(" ", "")}
        value={selectedValue}
        onChange={handleChange}
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