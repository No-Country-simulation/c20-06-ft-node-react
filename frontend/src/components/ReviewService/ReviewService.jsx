"use client"

import { FaRegStar } from "react-icons/fa"
import CircleAvatar from "../CircleAvatar/CircleAvatar"
import styles from './styles.module.css'
import { useState } from "react"
import { Button, ImageInput, TextAreaInput } from "..";

const ReviewService = () => {

    const stars = Array.from({ length: 5 });
    const [rating, setRating] = useState(0);
    const [isCommenting, setCommenting] = useState(false)

    return (
        <>
            <p>Calificar y comentar</p>
            <div className={styles.containerReview}>
                <CircleAvatar
                    name={'ass'}
                    lastName={'bsdf'}
                />
                <div className={styles.stars}>
                {stars.map((_, index) => (
                    <FaRegStar 
                        key={index}
                        className={`${styles.star} ${index+1 <= rating ? styles.selectedStar:''}`}
                        onClick={()=>{
                            if(rating == index +1) {
                                setRating(0)
                                setCommenting(false)
                            } else {
                                setRating(index +1)
                                setCommenting(true)
                            }
                        }}
                    />
                ))}
                </div>
            </div>
            {isCommenting
            ?<div>
                <TextAreaInput label='Comentario' rows={4} placeholder='Cuenta tu experiencia'/>
                <ImageInput label='Agregar fotos(opcional)'message='Comparte images del trabajo realizado' />
                <Button>Enviar comentario</Button>
            </div>
            :null}
        </>
    )
}

export default ReviewService