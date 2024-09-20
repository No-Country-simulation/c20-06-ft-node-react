"use client"

import { useState } from 'react'
import { LoginLayout, Button, TextInput, LoginStepOne } from "@/components"
import { validateEmail } from '@/utils/functions'
import { useFetchCities, useFetchServices } from '@/utils/hooks'
import styles from './styles.module.css'

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

const Step3 = ({ handleSubmit, providerForm, setProviderForm }) => {
  const cities = useFetchCities();
  const services = useFetchServices();

  const handleChange = (e) => {
    setProviderForm({
      ...providerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (e) => {
    const selectedServiceIds = Array.from(e.target.selectedOptions, option => option.value);

    setProviderForm(prevForm => ({
      ...prevForm,
      serviceIds: selectedServiceIds,
    }));
  };

  const handleLocationChange = (e) => {
    const selectedLocationIds = Array.from(e.target.selectedOptions, option => option.value);

    setProviderForm(prevForm => ({
      ...prevForm,
      locationIds: selectedLocationIds,
    }));
  };

  return (
    <LoginLayout className={styles.login}>
      <h3 className={styles.title}>¡Un último paso!</h3>
      <label htmlFor="first_name">Nombre:</label>
      <TextInput className={styles.input} type="text" required={true} name="first_name" placeholder="Nombre" value={providerForm.first_name} onChange={handleChange} />

      <label htmlFor="last_name">Apellido:</label>
      <TextInput className={styles.input} type="text" required={true} name="last_name" placeholder="Apellido" value={providerForm.last_name} onChange={handleChange} />

      <label htmlFor='phone_number'>Numero de telefono:</label>
      <TextInput className={styles.input} type="number" required={true} name="phone_number" placeholder="Numero de telefono" value={providerForm.phone_number} onChange={handleChange} />

      <label htmlFor='location'>Ciudades donde trabajas:</label>
      <select className={styles.select} name="location" id="location" value={providerForm.locationIds} onChange={handleLocationChange} multiple={true}>
        <option value={null} disabled>
          Selecciona una ciudad
        </option>
        {
          cities?.map((city) => (
            <option key={city.id} value={city.id}>
              {city.localidad}
            </option>
          ))
        }
      </select>

      <label htmlFor='service'>Servicios que ofreces:</label>
      <select className={styles.select} name="service" id="service" value={providerForm.serviceIds} onChange={handleServiceChange} multiple={true}>
        <option value={null} disabled>
          Selecciona los servicios que ofreces
        </option>
        {
          services?.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))
        }
      </select>
      En caso de necesitar mas de un servicio o localidad podes seleccionarlos manteniedo presionada la tecla control
      <Button className={styles.button} onClick={handleSubmit}>
        Confirmar y Crear cuenta
      </Button>
    </LoginLayout>
  );
}

const Page = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const [providerForm, setProviderForm] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    serviceIds: [],
    locationIds: [],
    profileDescription: '',
    profilePicture: '',
  });

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
    const step1props = {
      rol,
      setRol,
      onNext: handleNext,
    };
    return (
      <div className={styles.container}>
        <Step1 {...step1props} />
      </div>
    );
  }

  if (step === 2) {
    const step2props = {
      rol,
      onNext: handleNext,
      handleSubmit,
      form,
      handleChange,
      error,
      message
    }

    return (
      <div className={styles.container}>
        <Step2 {...step2props} />
      </div>
    );
  }

  if (step === 3 && rol === 'service_provider') {
    const step3Props = {
      handleSubmit,
      providerForm,
      setProviderForm
    }

    return (
      <div className={styles.container}>
        <Step3 {...step3Props} />
      </div>
    );
  }
};

export default Page;
