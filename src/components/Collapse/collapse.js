import styles from "./collapse.module.css";
import arrow from "../../assets/arrow.png";
import { useState } from "react";

/**
 * Collapse component
 * @param {string} title - Title of the collapse
 * @param {string} content - Content of the collapse
 * @return {HTMLElement}
 */

function Collapse({ title, content }) {
  const [opening, setOpening] = useState(false);

  return (
    <div
      className={
        window.location.pathname === "/about"
          ? `${styles.collapse} ${styles.collapse__about}`
          : `${styles.collapse} ${styles.collapse__lodging}`
      }
    >
      <div
        className={
          window.location.pathname === "/about"
            ? `${styles.collapse__header} ${styles.collapse__header_about}`
            : `${styles.collapse__header} ${styles.collapse__header_lodging}`
        }
      >
        <h3
          className={
            window.location.pathname === "/about"
              ? `${styles.collapse__title_home}`
              : `${styles.collapse__title_lodging}`
          }
        >
          {title}
        </h3>
        <img
          src={arrow}
          alt="Afficher le contenu"
          className={
            opening
              ? `${styles.collapse__arrow}`
              : `${styles.collapse__arrow} ${styles.collapse__arrow_up}`
          }
          onClick={() => setOpening(!opening)}
        ></img>
      </div>
      <div
        className={
          opening
            ? `${styles.collapse__content}`
            : `${styles.collapse__content_hidden}`
        }
      >
        <p
          className={
            window.location.pathname === "/about"
              ? `${styles.collapse__content_about}`
              : `${styles.collapse__content_lodging}`
          }
        >
          {content}
        </p>
      </div>
    </div>
  );
}

export default Collapse;
