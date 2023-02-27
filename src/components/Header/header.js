import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-kasa.png";
import styles from "./header.module.css";

/**
 * Header component
 * @return {HTMLElement}
 */

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="page d'accueil" />
      <nav className={styles.menu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.item_active} ${styles.item}` : `${styles.item}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.item_active} ${styles.item}` : `${styles.item}`
          }
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
