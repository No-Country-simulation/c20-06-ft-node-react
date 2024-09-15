"use client"

import { DropDownInput, Modal, TextAreaInput, ImageInput, ReviewService, CommentService } from "@/components"
import styles from "./styles.module.css"
import { FaRegHeart, FaWhatsapp  } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { IoShareSocialOutline } from "react-icons/io5"
import Image from 'next/image';
import { useState } from "react";

const DetailWorkerServiceModal = (props) => {

    const [isFavorite, setFavorite] = useState(false)
    return (
        <Modal
            title={'Servicio de carpintero'}
            hidden={props.isClosedModal}
            onClose={() => props.setClosedModal(true)}
        >
            <div className={styles.container}>
                <div className={styles.infoWorker}>
                    <div className={styles.info}>
                        <p className={styles.name}>{`${props.worker ? `${props.worker.name} ${props.worker.lastName}` : 'anombre'}`}</p>
                        <p>Edad: 34</p>
                        <p>Puntutación: 3.2 ⭐</p>
                        <p><FaWhatsapp className={styles.iconInfo}/> 68705705</p>
                        <p><MdOutlineEmail className={styles.iconInfo}/> lpa@gmail.com</p>
                    </div>
                    <div className={styles.favorite}>
                        <button 
                            className={`${styles.buttonFavorite} ${isFavorite?styles.buttonBackground:styles.buttonShadow}`}
                            onClick={()=>{
                                setFavorite(!isFavorite)
                            }}
                        > <FaRegHeart className={styles.icon} />{isFavorite?'Quitar Favorito':'Marcar Favorito'}</button>
                        <button 
                            className={`${styles.buttonFavorite} ${styles.buttonShadow}`}
                        > <IoShareSocialOutline className={styles.icon} />Compartir</button>
                    </div>
                </div>
                <p className={styles.descriptionWorker}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab atque rerum amet aperiam delectus quaerat soluta explicabo libero hic fugit optio doloremque vitae reprehenderit sed nisi, iure iusto eos mollitia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium debitis impedit nulla, incidunt quam distinctio facilis quasi quisquam deleniti laudantium dolore illo, at provident voluptatem reiciendis voluptate nostrum animi cupiditate.</p>
                <div className={styles.contentImages}>
                    <img
                        className={styles.image}
                        src={'https://i0.wp.com/plomeros.uno/wp-content/uploads/2023/09/Problemas-de-plomeria-comunes-en-empresas-causas-y-soluciones-4.jpg'}
                        alt={`Previsualización 1`}
                        width={150}
                        height={150}
                    />
                    <img
                        className={styles.image}
                        src={'https://aprende.com/wp-content/uploads/2022/01/instalacion-de-una-tuberia-funciones-del-plomero.jpg'}
                        alt={`Previsualización 2`}
                        width={150}
                        height={150}
                    />
                </div>
                <ReviewService />
                <p className={styles.coments}>Comentarios</p>
                <CommentService />
            </div>
        </Modal>
    )
}

export default DetailWorkerServiceModal