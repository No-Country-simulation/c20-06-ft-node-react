"use client"
import { useState } from 'react'
import { LoginLayout, AuthProvider, useAuth } from '@/components'
import { useRouter } from 'next/navigation'
import styles from './styles.module.css'


const Page = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const { isLoggedIn, logIn } = useAuth()
  const router = useRouter()

  // if (isLoggedIn) {
  //   router.push('/')
  // }

  console.log('page isLoggedIn', isLoggedIn)

  return (
    <AuthProvider>
      <section className={styles.container}>
        <LoginLayout className={styles.loginLayout}>
          <p>Sign In</p>
          <button onClick={logIn}>Login</button>
        </LoginLayout>
      </section>
    </AuthProvider>
  )
}

const SignIn = () => {
  return (
    <AuthProvider>
      <Page />
    </AuthProvider>
  )
}

export default SignIn