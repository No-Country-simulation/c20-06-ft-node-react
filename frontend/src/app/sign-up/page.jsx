"use client"

import { useState } from 'react'
import { LoginLayout, Button, TextInput, LoginStepOne } from "@/components"
import { validateEmail } from '@/utils/functions'
import styles from './styles.module.css'

// const Step1 = ({ rol, setRol, onNext }) => {
//   return (
//     <LoginLayout className={styles.login}>
//       <LoginStepOne
//         rol={rol}
//         setRol={setRol}
//         onNext={onNext}
//       />
//     </LoginLayout>
//   )
// }

// const Step2 = ({ rol, onNext, handleSubmit, form, handleChange, error, message }) => {
//   return (
//     <>
//       <h3 className={styles.title}>Crear cuenta</h3>
//       <LoginLayout className={styles.login}>
//         <form onSubmit={rol ? handleSubmit : onNext} className={styles.form}>
//           Ingresa tu correo:
//           <TextInput className={styles.input} type="email" required={true} onChange={handleChange} name="email" value={form.email} placeholder="Email" error={error} />
//           {message && <p className={styles.message}>{message}</p>}
//           Ingresa tu contraseña:
//           <TextInput className={styles.input} type="password" required={true} onChange={handleChange} name="password" value={form.password} placeholder="Contraseña" error={error} />
//           <Button type='button' className={styles.button} onClick={rol === 'service_provider' ? onNext : handleSubmit}>Crear cuenta</Button>
//         </form>
//         <div className={styles.divider}>
//           <span>o usar Google</span>
//         </div>

//         <Button className={`${styles.button} ${styles.notAllowed}`}>Crear cuenta con Google</Button>
//       </LoginLayout>
//     </>
//   )
// }

// const Page = () => {
//   const [form, setForm] = useState({ email: '', password: '' })
//   const [rol, setRol] = useState('')
//   const [message, setMessage] = useState('')
//   const [error, setError] = useState(false)
//   const [step, setStep] = useState(1)

//   const handleNext = () => {
//     setStep(step + 1)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateEmail(form.email)) {
//       setError(true)
//       setMessage('Por favor ingrese un email valido')
//       return
//     }

//     setError(false)
//     setMessage('')

//     try {
//       const completeForm = { ...form, rol }
//       const res = await fetch('/api/sign-up', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(completeForm)
//       })

//       const data = await res.json()
//       console.log(data)
//       setMessage(data.message)

//     } catch (error) {
//       setError(true)
//       setMessage(error.message)
//     }
//   }

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     })
//   }

//   if (step === 1) {
//     return (
//       <div className={styles.container}>
//         <Step1 rol={rol} setRol={setRol} onNext={handleNext} />
//       </div>
//     )
//   }


//   if (step === 2) {
//     return (
//       <div className={styles.container}>
//         <Step2 onNext={handleNext} onSubmit={handleSubmit} form={form} setForm={setForm} handleChange={handleChange} error={error} message={message} />
//       </div>
//     )
//   }

//   if (step === 3 && rol === 'service_provider') {
//     return (
//       <div className={styles.container}>
//         <LoginLayout className={styles.login}>
//           <h3 className={styles.title}>¡Un ultimo paso!</h3>
//           <Button className={styles.button} onClick={() => setStep(1)}>Iniciar sesión</Button>
//         </LoginLayout>
//       </div>
//     )
//   }
// }

// export default Page

const Step1 = ({ rol, setRol, onNext }) => {
  return (
    <LoginLayout className={styles.login}>
      <LoginStepOne rol={rol} setRol={setRol} onNext={onNext} />
    </LoginLayout>
  );
};

const Step2 = ({ rol, onNext, handleSubmit, form, handleChange, error, message }) => {
  return (
    <>
      <h3 className={styles.title}>Crear cuenta</h3>
      <LoginLayout className={styles.login}>
        <form onSubmit={rol === 'service_provider' ? onNext : handleSubmit} className={styles.form}>
          Ingresa tu correo:
          <TextInput
            className={styles.input}
            type="email"
            required={true}
            onChange={handleChange}
            name="email"
            value={form.email}
            placeholder="Email"
            error={error}
          />
          {message && <p className={styles.message}>{message}</p>}
          Ingresa tu contraseña:
          <TextInput
            className={styles.input}
            type="password"
            required={true}
            onChange={handleChange}
            name="password"
            value={form.password}
            placeholder="Contraseña"
            error={error}
          />
          <Button type="submit" className={styles.button}>
            {rol === 'service_provider' ? 'Siguiente' : 'Crear cuenta'}
          </Button>
        </form>
        <div className={styles.divider}>
          <span>o usar Google</span>
        </div>

        <Button className={`${styles.button} ${styles.notAllowed}`}>Crear cuenta con Google</Button>
      </LoginLayout>
    </>
  );
};

const Step3 = ({ handleSubmit }) => (
  <LoginLayout className={styles.login}>
    <h3 className={styles.title}>¡Un último paso!</h3>
    <Button className={styles.button} onClick={handleSubmit}>
      Confirmar y Crear cuenta
    </Button>
  </LoginLayout>
);

const Page = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [rol, setRol] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setError(true);
      setMessage('Por favor ingrese un email válido');
      return;
    }

    setError(false);
    setMessage('');

    try {
      const completeForm = { ...form, rol };
      const res = await fetch('/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(completeForm),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setError(true);
      setMessage(error.message);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  if (step === 1) {
    return (
      <div className={styles.container}>
        <Step1 rol={rol} setRol={setRol} onNext={handleNext} />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className={styles.container}>
        <Step2
          rol={rol}
          onNext={handleNext}
          handleSubmit={handleSubmit}
          form={form}
          handleChange={handleChange}
          error={error}
          message={message}
        />
      </div>
    );
  }

  if (step === 3 && rol === 'service_provider') {
    return (
      <div className={styles.container}>
        <Step3 handleSubmit={handleSubmit} />
      </div>
    );
  }
};

export default Page;
