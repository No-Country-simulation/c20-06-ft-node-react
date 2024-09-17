"use client"

import { useState } from 'react';
import { ServicesList } from '@/components'

const CategoriesList = ({ categories, services, city, styles }) => {
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

  // const filteredCategories = categories?.filter(category =>
  //   services?.some(service => service.categories.includes(category.name))
  // );

  return (
    <ul className={styles.categories}>
      {categories?.map(category => (
        <li key={category.id} className={styles.category}>
          <button
            onClick={() => handleCategoryClick(category.id)}
            className={styles.button}
          >
            {category.name}
            <span className={activeCategory === category.id ? styles.rotated : ''}>▼</span>
          </button>

          {activeCategory === category.id && (
            <ServicesList
              category={category}
              services={services}
              city={city}
              closingCategory={closingCategory}
              styles={styles}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default CategoriesList