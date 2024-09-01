import { DropDownInput, Modal, TextAreaInput, ImageInput } from "@/components"
import styles from "./styles.module.css"

const EditReadNewService = (props) => {
  
  return (
    <Modal
      title="Agregar servicio"
      hidden={props.isClosedModal}
      onClose={() => props.setClosedModal(true)}
    >
      <DropDownInput
        label="Selecciona un Oficio"
        placeholder="place holder"
        options= {[
          {
            value: 'plomero',
            label: 'Plomero'
          },
          {
            value: 'albanil',
            label: 'Albañil'
          },
        ]}
      />
      <TextAreaInput
        label="Agrega una descripción llamativa"
        placeholder="..."
        error=""
        rows={5}
      />
      <ImageInput 
        label="Agrega referencias de tu trabajo (opcional)"
        message="Es mas probable que te contraten si compartes tu trabajo"
      />
      <div className={styles.addService}>
        <button 
          onClick={() => props.setClosedModal(true)}
        >Agregar Servicio</button>
      </div>
    </Modal>
  )
}

export default EditReadNewService