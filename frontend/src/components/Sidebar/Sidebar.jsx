import { CategoriesList } from '@/components'
import styles from './styles.module.css';

const Sidebar = ({ categories, services, city }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.otherServices}>
        Otros servicios
        <CategoriesList
          categories={categories}
          services={services}
          city={city}
          styles={styles}
        />
      </div>
    </aside >
  );
};

export default Sidebar;
