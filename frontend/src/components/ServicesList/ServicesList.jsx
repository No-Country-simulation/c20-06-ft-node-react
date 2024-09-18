import Link from "next/link";
import { useMemo } from "react";

const servicesOfCategory = (services, categoryName) => {
  const filteredServicesByCategory = services?.filter(service =>
    service.categories.some(category => category.name === categoryName)
  )

  if (filteredServicesByCategory.length === 0) return null

  const listOfServices = filteredServicesByCategory.map((service) => {
    const name = service.title?.trim().replace(/^[^\w]+/, '');
    
    const normalizeTitle = (title) => {
      return title
        .normalize("NFD") // Normaliza el texto
        .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
        .toLowerCase(); // Convierte a minúsculas
    }

    return {
      ...service,
      title: name,
      to: normalizeTitle(name)
    }
  });

  return listOfServices.sort((a, b) => a.title.localeCompare(b.title))
}

const ServicesList = ({ category, services, city, closingCategory, styles }) => {
  const filteredServices = useMemo(() => servicesOfCategory(services, category.name), [services, category.name])

  console.log(filteredServices)

  return (
    <ul className={`${styles.services} ${closingCategory === category.id ? styles.servicesClosing : ''}`}>
      {
        filteredServices?.map(service =>
          <li key={service.id} className={styles.service}>
            <Link href={`/service/${service.to}?city=${city}`} className={styles.serviceLink}>
              {service.title}
            </Link>
          </li>
        )
      }
    </ul>
  )
}

export default ServicesList