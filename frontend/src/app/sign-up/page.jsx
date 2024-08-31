"use client"

import { useState } from 'react'
import { LoginLayout, Button, TextInput } from "@/components"
import styles from './styles.module.css'

const Page = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateEmail(form.email)) {
      setError(true)
      setMessage('Por favor ingrese un email valido')
      return
    }

    setError(false)
    setMessage('')

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
      setMessage(data.message)

    } catch (error) {
      setError(true)
      setMessage(error.message)
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Crear cuenta</h3>
      <LoginLayout className={styles.login}>
        Usar correo
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextInput className={styles.input} type="email" required={true} onChange={handleChange} name="email" value={form.email} placeholder="Email" error={error} />
          {message && <p className={styles.message}>{message}</p>}
          <Button className={styles.button}>Crear cuenta</Button>
        </form>
        <div className={styles.divider}>
          <span>o usar Google</span>
        </div>

        <Button className={styles.button}>Crear cuenta con Google</Button>
      </LoginLayout>
    </div>
  )
}

export default Page