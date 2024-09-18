import styles from './styles.module.css'

const CircleAvatar = ({ src, name, lastName, size = 'sm'}) => {
    return (
        name
            ? <div className={`${styles.imageContainer} ${size==='lg' ? styles.lg : size === 'md' ? styles.md : styles.sm}`}>
                {name[0]}{lastName[0]}
            </div>
            : <div className={`${styles.imageContainer} ${size==='lg' ? styles.lg : size === 'md' ? styles.md : styles.sm}`}>
                <img src={src} alt="avatar" />
            </div>
    )
}

export default CircleAvatar