"use client"
import { useState } from 'react'

import { ServiceCard, Button } from '@/components'
import { useFetchCategories, useFetchCities, useFetchServices } from '@/utils/hooks'

import styles from './styles.module.css'

const Step1 = ({ search, setSearch, cities, categories, services, onNext }) => {
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
          cities &&
          cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))
        }
      </select>

      <label className={styles.label} htmlFor="category">Categoria:</label>
      <select className={styles.select} name="category" id="category" value={search.category} onChange={handleCategoryChange}>
        <option value="">Todos</option>
        {
          categories &&
          categories
            .filter(category =>
              services.some(service => service.categories.includes(category.name))
            )
            .map(category => (
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
  const filter = () => {
    if (search.city !== '' && search.category !== '') {
      const filteredServices = services.filter(service =>
        service.categories.includes(search.category)
      );
      return filteredServices
    }

    return services
  }

  const listServices = filter()

  return (
    <main className={styles.mainS2}>
      <h3 className={styles.title}>Aqui podras encontrar distintos servicios, escoge el que necesites</h3>
      <div className={styles.servicesContainer}>
        {
          listServices &&
          listServices.map(service => (
            <ServiceCard className={styles.serviceCard} key={service.id} service={service} query={search} />
          ))
        }

        {
          listServices.length === 0 &&
          <p>No se encontraron resultados</p>
        }

      </div>
      <Button className={styles.button} onClick={onPrev}>Volver</Button>
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
    <>
      {
        step === 1 &&
        <Step1
          search={search} setSearch={setSearch}
          cities={cities} categories={categories}
          services={services}
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
    </>
  )
}

export default Home