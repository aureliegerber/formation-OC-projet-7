import styles from "./footer.module.css";
import logo from "../../assets/logo-footer.png";

/**
 * Footer component 
 * @return {HTMLElement}
 */

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src={logo}
        alt="Kasa - Agence de location d'appartements entre particuliers"
      />
      <p className={styles.footer__copyright}>
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
