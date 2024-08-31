"use client";
import { useState } from 'react';
import { Button } from '@/components';

import styles from './Sidebar.module.css';
import Link from 'next/link';

const Sidebar = ({ categories, services, city }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.login}>
        <Button>
          <Link href="/sign-up">
            Crear cuenta
          </Link>
        </Button>
        <Button>Iniciar sesion</Button>
      </div>

      <div className={styles.otherServices}>
        Otros servicios
        <ul>
          {
            categories &&
            categories.map(category => (
              <li key={category.id}>
                <button onClick={() => handleCategoryClick(category.id)}>
                  {category.name}
                </button>
                {
                  activeCategory === category.id && (
                    <ul>
                      {
                        services &&
                        services.filter(service => service.categories.includes(category.name))
                          .map(service => (
                            <li key={service.id}>
                              <Link href={`/service${service.to}?city=${city}`}>
                                {service.name}
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

    </aside>
  );
};

export default Sidebar;
