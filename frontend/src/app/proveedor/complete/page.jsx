"use client"

import { useState } from 'react'
import { LoginLayout, TextInput, Button } from '@/components'
import styles from './styles.module.css'

const page = () => {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    pais: '',
    cities: [],
    services: [],
    telephone: '',
    age: 18,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <LoginLayout className={styles.container}>
        <h1>Completa los datos faltantes</h1>

        <form onSubmit={handleSubmit} className={styles.form}>

          <label htmlFor="name">Nombre</label>
          <TextInput name="name" value={form.name} onChange={handleChange} placeHolder="Ingresa tu nombre" className={styles.input} required />

          <label htmlFor="lastname">Apellido</label>
          <TextInput name="lastname" value={form.lastname} onChange={handleChange} placeHolder="Ingresa tu apellido" className={styles.input} required />

          <label htmlFor="telephone">Teléfono</label>
          <TextInput name="telephone" value={form.telephone} onChange={handleChange} placeHolder="Ingresa tu teléfono" type="number" className={styles.input} required />

          <label htmlFor="age">Edad</label>
          <TextInput name="age" value={form.age} onChange={handleChange} placeHolder="Ingresa tu edad" type="number" className={styles.input} required />

          <label htmlFor="pais">Pais</label>
          <TextInput name="pais" value={form.pais} onChange={handleChange} placeHolder="Ingresa tu pais" className={styles.input} required />

          <label htmlFor="cities">Ciudad</label>
          <TextInput name="cities" value={form.cities} onChange={handleChange} placeHolder="Ingresa tu ciudad" className={styles.input} required />

          <Button type="submit">Enviar</Button>
        </form>

      </LoginLayout>
    </div>
  )
}

export default page