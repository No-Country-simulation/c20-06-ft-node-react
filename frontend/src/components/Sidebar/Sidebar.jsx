"use client";
import { useState } from 'react';

import styles from './styles.module.css';
import Link from 'next/link';

const Sidebar = ({ categories, services, city }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [closingCategory, setClosingCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    if (activeCategory === categoryId) {
      setClosingCategory(categoryId);
      setTimeout(() => {
        setActiveCategory(null);
        setClosingCategory(null);
      }, 400);
    } else {
      setActiveCategory(categoryId);
      setClosingCategory(null);
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.otherServices}>
        Otros servicios
        <ul className={styles.categories}>
          {
            categories &&
            categories
              .filter(category =>
                services.some(service => service.categories.includes(category.name))
              )
              .map(category => (
                <li key={category.id} className={styles.category}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={styles.button}
                  >
                    {category.name}
                    <span className={activeCategory === category.id ? styles.rotated : ''}>▼</span>
                  </button>

                  {
                    activeCategory === category.id && (
                      <ul className={`${styles.services} ${closingCategory === category.id ? styles.servicesClosing : ''
                        }`}>
                        {
                          services &&
                          services.filter(service => service.categories.includes(category.name))
                            .map(service => (
                              <li key={service.id} className={styles.service}>
                                <Link href={`/service${service.to}?city=${city}`} className={styles.serviceLink}>
                                  {service.name.slice(2)}
                                </Link>
                              </li>
                            ))}
                      </ul>
                    )}
                </li>
              ))
          }
        </ul>
      </div>

    </aside >
  );
};

export default Sidebar;
