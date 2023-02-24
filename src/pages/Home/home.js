import Header from "../../components/Header/header";
import Banner from "../../components/Banner/banner";
import Gallery from "../../components/Gallery/gallery";
import Footer from "../../components/Footer/footer";
import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <Banner />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
