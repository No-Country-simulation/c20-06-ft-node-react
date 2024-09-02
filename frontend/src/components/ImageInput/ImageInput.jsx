"use client"

import styles from "./styles.module.css"
import { useState } from "react";
import Image from 'next/image';

const ImageInput = (props) => {

  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    const validImages = files
      .filter((file) => file.type === "image/jpeg" || file.type === "image/png")
      .map((file) => URL.createObjectURL(file));

    if (validImages.length > 0) {
      setSelectedImages((prevImages) => [...prevImages, ...validImages]);
    } else {
      alert("Por favor, selecciona solo imágenes en formato JPG o PNG.");
    }
  };

  const removeImage = (imageUrl) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image) => image !== imageUrl)
    );
  };

  return (
    <div className={styles.imageInput}>
      <label htmlFor={props.label.replace(" ", "")}>{props.label}</label>
      <div className={styles.containerImage}>
        <div className={styles.header}>
          <p className={styles.headerTitle}>{props.message ?? 'Mensaje llamativo'}</p>
          <label htmlFor="fileInput">Subir foto</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="fileInput"
            onChange={handleImageChange}
            multiple
          />
        </div>
        <div className={styles.content}>
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className={styles.imagePreview}
            >
              <button
                className={styles.removeButton}
                onClick={() => removeImage(image)}
              >
                ×
              </button>
              <Image
              className={styles.image}
                src={image}
                alt={`Previsualización ${index + 1}`}
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>
      </div>
      {props.error ? <p>{props.error}</p> : null}
    </div>
  )
}

export default ImageInput