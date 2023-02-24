import styles from "./carousel.module.css";
import arrowRight from "../../assets/arrow_carousel_right.png";
import arrowLeft from "../../assets/arrow_carousel_left.png";
import { useState } from "react";

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
        alt="Photo de l'appartement"
      />
      {array.length > 1 && (
        <>
          <img
            className={`${styles.carousel__arrow} ${styles.carousel__arrow__right}`}
            src={arrowRight}
            alt="Image suivante"
            onClick={nextSlide}
          />
          <img
            className={`${styles.carousel__arrow} ${styles.carousel__arrow__left}`}
            src={arrowLeft}
            alt="Image précédente"
            onClick={prevSlide}
          />
          <p className={styles.carousel__count}>
            {currentIndex + 1} / {array.length}
          </p>
        </>
      )}
    </section>
  );
}

export default Carousel;
