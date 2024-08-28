import { ServiceCard } from "@/components";
import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/services");
  const { services } = await response.json();

  return (
    <main className={styles.main}>
      <h1>Servicios</h1>
      <div className={styles.servicesContainer}>
        {
          services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        }
      </div>
    </main>
  );
}
