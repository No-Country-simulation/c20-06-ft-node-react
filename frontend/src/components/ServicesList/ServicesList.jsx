import Link from "next/link";

const servicesOfCategory = (services, categoryName) => {
  return services
    .filter(service => service.categories.includes(categoryName))
    .map(service => ({
      ...service,
      name: service.name.replace(/^[^\w]+/, '').trim()
    }));
}

const ServicesList = ({ category, services, city, closingCategory, styles }) => {
  const filteredServices = servicesOfCategory(services, category.name)

  return (
    <ul className={
      `${styles.services} ${closingCategory === category.id ? styles.servicesClosing : ''}`
    }>
      {
        filteredServices?.map(service => (
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