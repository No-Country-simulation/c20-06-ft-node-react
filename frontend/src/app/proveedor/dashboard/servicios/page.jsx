"use client";

import { useState } from "react"
import styles from "./page.module.css"
import EditReadNewServiceModal from "./ui/EditReadNewServiceModal"; 

const Servicios = () => {
  const [isClosedModal, setClosedModal] = useState(true);
  const listServices = [];

  return (
    <div className={styles.container}>
      <EditReadNewServiceModal 
        isClosedModal={isClosedModal}
        setClosedModal={setClosedModal}
      />
      <div className={styles.header}>
        <p>Mis servicios</p>
        <button onClick={() => setClosedModal(false)}>Agregar Servicio</button>
      </div>
      <div className={styles.content}>
        <p>Aun no tienes un servicio para ofrecer</p>
      </div>
    </div>
  );
};

export default Servicios;
