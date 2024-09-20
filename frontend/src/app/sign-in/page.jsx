"use client"
import { useState } from 'react'
import { LoginLayout, useAuth, Button, TextInput } from '@/components'
import { useRouter } from 'next/navigation'
import { validateEmail } from '@/utils/functions'
import styles from './styles.module.css'

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const router = useRouter()

  const { isLoggedIn, logIn } = useAuth()

  if (isLoggedIn) {
    router.push('/')
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
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(form)
      }).then((res)=>{
        const data = res.json().then((data)=>{
          logIn('abc',data)
          localStorage.setItem('user', JSON.stringify(data))
          console.log(data,'---')
          router.push('/')
        })
      })

      
      // setMessage(data.message)
      // if (data.status === 200) {
      // }

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
    <section className={styles.container}>
      <LoginLayout className={styles.loginLayout}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className={styles.form}>

          <label htmlFor="email">Email</label>
          <TextInput className={styles.input} type="email" required={true} onChange={handleChange} name="email" value={form.email} placeholder="Email" error={error} />
          {message && <p className={styles.message}>{message}</p>}

          <label htmlFor="password">Password</label>
          <TextInput type="password" name="password" placeholder="Password" value={form.password} onChange={(e) => handleChange(e)} className={styles.input} />

          <Button onClick={() => console.log('logueado!')} className={styles.button}>Login</Button>
        </form>

      </LoginLayout>
    </section>
  )
}


export default SignIn