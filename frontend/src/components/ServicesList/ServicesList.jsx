import Link from "next/link";
import { useMemo } from "react";

const servicesOfCategory = (services, categoryName) => {
  const filteredServicesByCategory = services?.filter(service => service.categories.includes(categoryName))

  if (filteredServicesByCategory.length === 0) return null

  const listOfServices = filteredServicesByCategory.map((service) => {
    const name = service.name?.trim().replace(/^[^\w]+/, '');

    return {
      ...service,
      name
    }
  });

  return listOfServices
}

const ServicesList = ({ category, services, city, closingCategory, styles }) => {
  const filteredServices = useMemo(() => servicesOfCategory(services, category.name), [services, category.name])

  return (
    <ul className={`${styles.services} ${closingCategory === category.id ? styles.servicesClosing : ''}`}>
      {
        filteredServices?.sort((a, b) => a.name.localeCompare(b.name))
          .map(service => (
            <li key={service.id} className={styles.service}>
              <Link href={`/service${service.to}?city=${city}`} className={styles.serviceLink}>
                {service.name}
              </Link>
            </li>
          ))
      }
    </ul>
  )
}

export default ServicesList