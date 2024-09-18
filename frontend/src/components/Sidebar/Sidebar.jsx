"use client";
import { CategoriesList } from '@/components'
import BurgerBtn from '../burgerBtn/BurgerBtn'
import styles from './styles.module.css';
import { useState } from "react"

const Sidebar = ({ categories, services, city }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.containerBtn}>
        <BurgerBtn handleClick={toggleMenu} clicked={isMenuOpen} />
      </div>

      
      <aside className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.otherServices}>
          Otros servicios
          <CategoriesList
            categories={categories}
            services={services}
            city={city}
            styles={styles}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
