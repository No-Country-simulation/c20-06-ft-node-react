import styles from "./styles.module.css"
import { MdDeleteOutline } from "react-icons/md"

const ServiceCard = ({title, description, onDelete, disabled = false}) => {
    return (
        <div className={styles.serviceCard}>
            <div>
                <p className={styles.serviceTitle}>{title}</p>
                <p className={styles.serviceDescription}>{description}</p>
            </div>
            <div className={styles.serviceActions}>
                <button
                    disabled={disabled}
                    onClick={()=>onDelete()}
                > <MdDeleteOutline className={styles.serviceIcon} />{disabled?'Eliminando...':'Eliminar Servicio'}</button>
            </div>
        </div>
    )
}

export default ServiceCard