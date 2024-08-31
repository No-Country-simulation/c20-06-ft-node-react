"use client"
import { useState } from 'react'

import { ServiceCard, Button } from '@/components'
import { useFetchCategories, useFetchCities, useFetchServices } from '@/utils/hooks'

import styles from './styles.module.css'

const Step1 = ({ search, setSearch, cities, categories, onNext }) => {
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
          categories &&
          categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))
        }
      </select>

      <Button className={styles.button} onClick={onNext}>Siguiente</Button>
    </main>
  )
}

const Step2 = ({ services, search, onPrev }) => {
  const filteredServices = services.filter(service =>
    service.categories.includes(search.category)
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

        {
          filteredServices.length === 0 &&
          <p>No se encontraron resultados</p>
        }

        <Button className={styles.button} onClick={onPrev}>Volver</Button>
      </div>
    </main>
  )
}

const Home = () => {
  const [step, setStep] = useState(1)
  const [search, setSearch] = useState({ city: '', category: '' })

  const categories = useFetchCategories()
  const cities = useFetchCities()
  const services = useFetchServices()

  return (
    <main>
      {
        step === 1 &&
        <Step1
          search={search} setSearch={setSearch}
          cities={cities} categories={categories}
          onNext={() => setStep(step + 1)}
        />
      }
      {
        step === 2 &&
        <Step2
          services={services} search={search}
          onPrev={() => setStep(step - 1)}
        />
      }
    </main>
  )
}

export default Home