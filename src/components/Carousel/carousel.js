import styles from "./carousel.module.css";
import arrowRight from "../../assets/arrow_carousel_right.png";
import arrowLeft from "../../assets/arrow_carousel_left.png";
import { useState } from "react";

/**
 * Carousel component
 * @param {array} array - Table of the images of the lodging
 * @return {HTMLElement}
 */

function Carousel({ array }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === array.length - 1) setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(array.length - 1);
  };

  return (
    <section className={styles.carousel}>
      <img
        src={array[currentIndex]}
        className={styles.carousel__img}
        alt="Appartement"
      />
      {array.length > 1 && (
        <div>
          <img
            className={`${styles.carousel__arrow} ${styles.carousel__arrow__right}`}
            src={arrowRight}
            alt="Photo suivante"
            onClick={nextSlide}
          />
          <img
            className={`${styles.carousel__arrow} ${styles.carousel__arrow__left}`}
            src={arrowLeft}
            alt="Photo précédente"
            onClick={prevSlide}
          />
          <p className={styles.carousel__count}>
            {currentIndex + 1} / {array.length}
          </p>
        </div>
      )}
    </section>
  );
}

export default Carousel;
