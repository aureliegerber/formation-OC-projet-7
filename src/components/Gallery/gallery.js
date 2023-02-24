import styles from "./gallery.module.css";
import datas from "../../datas/lodgingList.json";
import Card from "../Card/card";

function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__cards}>
        {datas.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              cover={data.cover}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
