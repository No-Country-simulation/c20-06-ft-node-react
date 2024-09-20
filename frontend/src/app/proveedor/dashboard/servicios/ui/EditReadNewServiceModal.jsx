'use client'
import { DropDownInput, Modal, TextAreaInput, ImageInput } from "@/components"
import styles from "./styles.module.css"
import React, { useState } from "react"
import { useFetchCategories, useFetchCities, useFetchServices } from '@/utils/hooks'

const EditReadNewServiceModal = (props) => {
  const services = useFetchServices()
  const [selectedOption, setSelectedOption] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleDropDownChange = (value) => {
    setSelectedOption(value)
  }
  
  const addService = async (idSp, idService) => {
    try {
      const response = await fetch(`http://localhost:3000/service_providers/${idSp}/addService/${idService}`, {
        method: 'PUT',
        credentials: 'include'
      });
      const data = await response.json();
      console.log('Addd Service', data)
    } catch (error) {
      console.error('Error fetching dataccc:', error);
    }
  };

  return (
    <Modal
      title="Agregar servicio"
      hidden={props.isClosedModal}
      onClose={() => props.setClosedModal(true)}
    >
      <DropDownInput
        label="Selecciona un Oficio"
        placeholder=""
        options= {services != null && services.length > 0 ? services.map((service) => {
          return {
            value: service.id,
            label: service.title
          }
        })
        : []}
        onChange={handleDropDownChange}
      />
      {/* <TextAreaInput
        label="Agrega una descripción llamativa"
        placeholder="..."
        error=""
        rows={5}
      />
      <ImageInput 
        label="Agrega referencias de tu trabajo (opcional)"
        message="Es mas probable que te contraten si compartes tu trabajo"
      /> */}
      <div className={styles.addService}>
        <button
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true)
            addService(props.idSp,selectedOption).then((e)=>{
              props.onAddService()
              props.setClosedModal(true)
              setIsLoading(false)
            })
            // router.push('/proveedor/dashboard/servicios')
            
          }}
        >{isLoading?'Guardando...':'Agregar Servicio'}</button>
      </div>
    </Modal>
  )
}

export default EditReadNewServiceModal