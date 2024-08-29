"use client"
import { useState, useEffect } from 'react'
import { ServiceCard, Button } from '@/components'
import styles from './page.module.css'

const Home = () => {
  const [step, setStep] = useState(1)
  const [services, setServices] = useState([])
  const [categories, setCategories] = useState([])
  const [cities, setCities] = useState([])
  const [search, setSearch] = useState({ city: '', category: '' })

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data.categories))

    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data.services))

    fetch('/api/cities')
      .then(res => res.json())
      .then(data => setCities(data.cities))
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

        <label className={styles.label} htmlFor="city">Ciudad:</label>
        <select className={styles.select} name="city" id="city" value={search.city} onChange={handleCityChange}>
          <option value="">Todos</option>
          {
            cities && cities.map(city => (
              <option key={city.id} value={city.city}>
                {city.city}
              </option>
            ))
          }
        </select>

        <label className={styles.label} htmlFor="category">Categoria:</label>
        <select className={styles.select} name="category" id="category" value={search.category} onChange={handleCategoryChange}>
          <option value="">Todos</option>
          {
            categories && categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))
          }
        </select>

        <Button className={styles.button} onClick={() => setStep(step + 1)}>Siguiente</Button>
      </main>
    )
  }

  const Step2 = (category) => {
    const filteredServices = services.filter(service => 
      service.categories.includes(category)
    );

    return (
      <main>
        <h3>Aqui podras encontrar distintos servicios, escoge el que necesites</h3>
        <div className={styles.servicesContainer}>
          {
            filteredServices &&
            filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} query={search} />
            ))
          }
        </div>
      </main>
    )
  }

  return (
    <main>
      {step === 1 && Step1(search, setSearch)}
      {step === 2 && Step2(search.category)}
    </main>
  )
}

export default Home