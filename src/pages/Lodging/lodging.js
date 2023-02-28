import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import datas from "../../datas/lodgingList.json";
import Header from "../../components/Header/header";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import Collapse from "../../components/Collapse/collapse";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";
import styles from "./lodging.module.css";

/**
 * Lodging component
 * @return {HTMLElement}
 */

function Lodging() {
  const params = useParams();
  const dataLodging = datas.find((data) => data.id === params.id);
  const navigate = useNavigate();
  useEffect(() => {
    if (dataLodging === undefined) {
      navigate("/error");
    }
  });

  if (dataLodging !== undefined) {
    const lodgingPictures = dataLodging.pictures;
    const title = dataLodging.title;
    const location = dataLodging.location;
    const tags = dataLodging.tags;
    const name = dataLodging.host.name;
    const picture = dataLodging.host.picture;
    const rating = dataLodging.rating;
    const description = dataLodging.description;
    const equipments = dataLodging.equipments;

    return (
      <div>
        <div className={styles.container}>
          <Header />
          <Carousel array={lodgingPictures} />
          <div className={styles.lodging__infos}>
            <div className={styles.lodging__titles}>
              <h1>{title}</h1>
              <h2>{location}</h2>
              <div className={styles.lodging__tags}>
                {tags.map((tag, index) => {
                  return <button key={index}>{tag}</button>;
                })}
              </div>
            </div>
            <div className={styles.infos__aside}>
              <div className={styles.lodging__host}>
                <p className={styles.host__name}>{name}</p>
                <img
                  src={picture}
                  className={styles.host__picture}
                  alt={name}
                />
              </div>
              <span className={styles.lodging__rating}>                
                {[...Array(5)].map((star, index) => {                  
                  let ratingValue = index + 1;
                  return (
                    <img
                      key={index}
                      src={ratingValue <= rating ? redStar : greyStar}
                      className={styles.rating__star}
                      alt={"Nombre d'étoiles " + rating}
                    />
                  );
                })}
              </span>
            </div>
          </div>
          <div className={styles.lodging__description}>
            <Collapse title="Description" content={description} />
            <Collapse
              title="Équipements"
              content={equipments.map((equipment, index) => {
                return (
                  <p key={index} className={styles.equipments__list}>
                    {equipment}
                  </p>
                );
              })}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Lodging;
