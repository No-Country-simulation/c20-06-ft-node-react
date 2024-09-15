import { IoMdClose } from "react-icons/io"
import styles from "./styles.module.css"

const Modal = (props) => {
  const closeModal = () => {
    props.onClose();
  };

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  if (props.hidden) {
    return null;
  }

  return (
    <div className={styles.background} onClick={closeModal}>
      <div className={styles.container} onClick={handleContentClick}>
        <div className={styles.header}>
          <p>{props.title}</p>
          <IoMdClose onClick={closeModal} />
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;