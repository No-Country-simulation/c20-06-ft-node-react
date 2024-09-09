import React from 'react';
import styles from './styles.module.css';

const DialogBox = ({ children }) => {
  return (
    <aside className={styles.dialogBox}>
      {children}
      <div className={styles.speakerIndicator} />
    </aside>
  );
};

export default DialogBox;
