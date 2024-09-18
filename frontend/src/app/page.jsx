"use client"
import { useState, useMemo } from 'react'

import { ServiceCard, Button, DialogBox } from '@/components'
import { useFetchCategories, useFetchCities, useFetchServices } from '@/utils/hooks'
import Img from '@/assets/ph_user.png'
import Logo from '@/assets/logo.png'

import styles from './styles.module.css'
import Image from 'next/image'

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
    <section className={styles.container}>
      <article className={styles.card}>
        <figure className={styles.imageContainer}>
          <Image src={Logo} alt="logo" width={70} height={70} />
        </figure>
        <p>
          Changas<strong style={{ color: 'var(--primary-color)' }}>App</strong>, el mejor lugar para encontrar ayuda en los servicios que tu necesites
        </p>

        <label className={styles.label} htmlFor="city">Ciudad:</label>
        <select className={styles.select} name="city" id="city" value={search.city} onChange={handleCityChange}>
          <option value="">Todos</option>
          {
            cities?.map((city) => (
              <option key={city.id} value={city.localidad}>
                {city.localidad} id: {city.id}
              </option>
            ))
          }
        </select>

        <label className={styles.label} htmlFor="category">Categoria:</label>
        <select className={styles.select} name="category" id="category" value={search.category} onChange={handleCategoryChange}>
          <option value="">Todos</option>
          {
            categories?.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))
          }
        </select>

        <Button className={styles.button} onClick={onNext}>Siguiente</Button>
      </article>
      <div className={styles.userContainer}>
        <div className={styles.dialogContainer}>
          <DialogBox>
            <p>Usar ChangasApp me cambio la vida</p>
          </DialogBox>
        </div>
        <div className={styles.userImageContainer}>
          <Image className={styles.image} src={Img} alt="image" />
        </div>
      </div>
    </section>
  )
}

const Step2 = ({ services, search, onPrev }) => {
  const filteredServices = useMemo(() => {
    if (search.city && search.category) {
      return services?.filter(service =>
        service.categories.includes(search.category)
      );
    }
    return services;
  }, [search, services]);

  return (
    <main className={styles.mainS2}>
      <h3 className={styles.title}>Aqui podras encontrar distintos servicios, escoge el que necesites</h3>
      <section className={styles.servicesContainer}>
        {
          filteredServices?.length > 0 ? (
            filteredServices?.map(service => (
              <ServiceCard className={styles.serviceCard} key={service.id} service={service} query={search} />
            ))
          ) : (
            <p>No se encontraron resultados</p>
          )}
      </section>
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
    <main className={styles.mainS1}>
      {
        step === 1 &&
        <Step1
          search={search}
          setSearch={setSearch}
          cities={cities}
          categories={categories}
          services={services}
          onNext={() => setStep(prevStep => prevStep + 1)}
        />
      }
      {
        step === 2 &&
        <Step2
          services={services}
          search={search}
          onPrev={() => setStep(prevStep => prevStep - 1)}
        />
      }
    </main>
  )
}

export default Home