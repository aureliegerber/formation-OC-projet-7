import styles from "./collapse.module.css";
import arrow from "../../assets/arrow.png";
import { useState } from 'react';

function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className={window.location.pathname === "/about" ? `${styles.collapse} ${styles.collapse__about}` : `${styles.collapse} ${styles.collapse__lodging}`}>
            <div className={styles.collapse__header}>
                <h3 className={window.location.pathname === "/about" ? `${styles.collapse__title_home}` : `${styles.collapse__title_lodging}`}>{title}</h3>
                <img src={arrow} alt="Afficher le contenu" className={toggle ? `${styles.collapse__arrow}` : `${styles.collapse__arrow} ${styles.collapse__arrow_up}`} onClick={() => setToggle(!toggle)}></img>
            </div>
            <div className={toggle ? `${styles.collapse__content}` : `${styles.collapse__content_hidden}`}>
                <p>{content}</p>
            </div>
        </div>            
    )
}

export default Collapse;