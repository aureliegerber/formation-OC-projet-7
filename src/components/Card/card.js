import styles from "./card.module.css";
import { Link } from "react-router-dom";

/**
 * Card component
 * @param {string} id - Id of the lodging
 * @param {string} title - Title of the lodging
 * @param {string} url - Url of the lodging's cover
 * @return {HTMLElement}
 */

function Card({ id, title, cover }) {
  return (
    <article className={styles.gallery__card}>
      <Link to={`/lodging/${id}`}>
        <img src={cover} alt={title} />
        <div className={styles.gallery__img}></div>
        <h3>{title}</h3>
      </Link>
    </article>
  );
}

export default Card;
