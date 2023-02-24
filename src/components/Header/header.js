import { Link } from "react-router-dom";
import logo from "../../assets/logo-kasa.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="page d'accueil" />
      <nav className={styles.menu}>
        <Link
          to="/"
          className={
            window.location.pathname === "/"
              ? `${styles.item_active} ${styles.item}`
              : `${styles.item}`
          }
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={
            window.location.pathname === "/about"
              ? `${styles.item_active} ${styles.item}`
              : `${styles.item}`
          }
        >
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
