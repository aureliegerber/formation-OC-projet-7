import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import styles from "./error.module.css";


function Error() {
    return (
        <div className={styles.error}>
            <Header />
            <div className={styles.error__body}>
                <h1 className={styles.error__title}>404</h1>
                <p className={styles.error__p}>Oups ! La page que vous demandez n'exsite pas</p>
                <Link to="/" className={styles.error__toHome}>Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default Error;