"use client"
import { useState, useEffect } from 'react'
import { ServiceCard } from '@/components'
import styles from './styles.module.css'

const Landing = () => {
  const [step, setStep] = useState(1)
  const [services, setServices] = useState([])
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState({ city: '', category: '' })

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data.categories))

    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data.services))
  }, [])

  const Step1 = (search, setSearch) => {
    const handleCityChange = (e) => {
      setSearch((prevSearch) => ({
        ...prevSearch,
        city: e.target.value
      }));
    };

    const handleCategoryChange = (e) => {
      setSearch((prevSearch) => ({
        ...prevSearch,
        category: e.target.value
      }));
    };

    return (
      <main className={styles.mainS1}>
        <h1>Logo app 😜</h1>
        El mejor lugar para encontar ayuda en los servicios que necesites!

        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={search.city}
          onChange={handleCityChange}
        />

        <label htmlFor="category">Categoria:</label>
        <select name="category" id="category" value={search.category} onChange={handleCategoryChange}>
          {
            categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))
          }
        </select>

        <button className={styles.button} onClick={() => setStep(step + 1)}>Siguiente</button>
        <p>ciudad: {search.city}, categoria: {search.category}</p>
      </main>
    )
  }

  const Step2 = () => {
    return (
      <main>
        <h3>Aqui podras encontrar distintos servicios, escoge el que necesites</h3>
        <div className={styles.servicesContainer}>
          {
            services.map(service => (
              <ServiceCard key={service.id} service={service} query={search}/>
            ))
          }
        </div>
      </main>
    )
  }

  return (
    <main>
      {step === 1 && Step1(search, setSearch)}
      {step === 2 && <Step2 />}
    </main>
  )
}

export default Landing