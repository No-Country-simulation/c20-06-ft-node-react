import styles from "./page.module.css"


const Servicios = () => {
    const listServices = []
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Mis servicios</p>
          <button> Agregar Servicio</button>
        </div>
        <div className={styles.content}>
          <p>Aun no tienes un servicio para ofrecer</p>
        </div>
      </div>
    )
  }
  
  export default Servicios