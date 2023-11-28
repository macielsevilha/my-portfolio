import  Link  from '../_ui/Link';
import styles from './Navbar.module.scss';



const Navbar = ({ children }) => {
    return (
       <nav className={styles.navbar}>
        <ul className={styles.itens}>
         {children}
        </ul>
       </nav>
    )
}

export default Navbar;