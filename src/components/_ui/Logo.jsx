import styles from './Logo.module.scss';


const Logo = (props) => {
    return (
        <div className={styles.logo}>
            <span className={styles.icon}>@</span>
            <span className={styles.text}>{props.name}</span>
        </div>
    )
}

export default Logo;