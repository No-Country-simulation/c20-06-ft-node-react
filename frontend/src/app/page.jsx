import styles from "./page.module.css";
import { CategoryCard } from "@/components";

export default function Home() {
  const categories = [{ id: 1, name: "⚡ Electricista", to: "/electricista", }, { id: 2, name: "🔨 Plomero", to: '/plomero' }, { id: 3, name: "🪵 Carpintero", to: '/carpintero' }, { id: 4, name: "🔧 Mecanico", to: '/mecanico' }, { id: 5, name: "🎨 Pintor", to: '/pintor' }]

  return (
    <main className={styles.main}>
      <h1>Categorías</h1>
      <div className={styles.categoryContainer}>
        {
          categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        }
      </div>
    </main>
  );
}
