"use client"

import { useState } from 'react'
import { LoginLayout, Button, TextInput, LoginStepOne } from "@/components"
import { validateEmail } from '@/utils/functions'
import styles from './styles.module.css'

const Step1 = ({ setRol, onNext }) => {
  return (
    <LoginStepOne
      setRol={setRol}
      onNext={onNext}
    />
  )
}

const Page = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [rol, setRol] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [step, setStep] = useState(1)

  const handleNext = () => {
    setStep(step + 1)
  }

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
      const completeForm = { ...form, rol }
      const res = await fetch('/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(completeForm)
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
      {step === 1 && <Step1 setRol={setRol} onNext={handleNext} />}
      {step === 2 && (
        <>
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
        </>
      )
      }

    </div>
  )
}

export default Page