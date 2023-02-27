import styles from "./banner.module.css";

/**
 * Banner component
 * @return {HTMLElement}
 */

function Banner() {
  if (window.location.pathname === "/") {
    return (
      <div className={`${styles.banner} ${styles.banner__home}`}>
        <h1 className={styles.banner__title}>Chez vous, partout et ailleurs</h1>
      </div>
    );
  }

  if (window.location.pathname === "/about") {
    return <div className={`${styles.banner} ${styles.banner__about}`}></div>;
  }
}

export default Banner;
