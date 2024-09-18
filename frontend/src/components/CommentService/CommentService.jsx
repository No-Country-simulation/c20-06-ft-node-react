import styles from './styles.module.css'
import CircleAvatar from "../CircleAvatar/CircleAvatar"

const CommentService = () => {
    return (
        <div className={styles.container}>
            <div>
                <CircleAvatar name='Lui' lastName='Cast'/>
            </div>
            <div>
                <p className={styles.comment}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ipsam laudantium est veritatis voluptatum earum, corrupti eum dolore accusantium molestias, optio voluptatem! Quasi odio soluta unde velit. Neque, alias quos?</p>
                <div className={styles.contentImages}>
                    <img
                        className={styles.image}
                        src={'https://i0.wp.com/plomeros.uno/wp-content/uploads/2023/09/Problemas-de-plomeria-comunes-en-empresas-causas-y-soluciones-4.jpg'}
                        alt={`Previsualización 1`}
                        width={100}
                        height={100}
                    />
                    <img
                        className={styles.image}
                        src={'https://aprende.com/wp-content/uploads/2022/01/instalacion-de-una-tuberia-funciones-del-plomero.jpg'}
                        alt={`Previsualización 2`}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default CommentService