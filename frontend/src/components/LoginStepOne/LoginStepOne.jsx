import React from 'react'

const LoginStepOne = ({ register = false, setRol }) => {
  
  const handleChange = (e) => {
    setRol(e.target.value)
  }

  return (
    <section>
      {
        register
          ? <h1>Antes de comenzar, completa tus datos</h1>
          : <h1>¿Con que perfil deseas ingresar?</h1>
      }
      <form>
        <label htmlFor="rol">
          Usuario
          <input
            type='radio'
            name='rol'
            value='user'
            // checked={form.type === 'user'}
            onChange={handleChange}
          // style={{display: 'none'}}
          />
        </label>

        <label htmlFor="option">
          Proveedor
          <input
            type='radio'
            name='rol'
            value='provider'
            // checked={form.type === 'provider'}
            onChange={handleChange}
          // style={{display: 'none'}}
          />
        </label>
      </form>
    </section>
  )
}


export default LoginStepOne