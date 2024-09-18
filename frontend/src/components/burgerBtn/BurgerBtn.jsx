
import React from "react";
import styles from './BurgerBtn.module.css';

const BurgerBtn = ({ handleClick, clicked }) => {
  return (
    <div
      onClick={handleClick}
      className={`${styles.navIcon} ${clicked ? styles.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerBtn;