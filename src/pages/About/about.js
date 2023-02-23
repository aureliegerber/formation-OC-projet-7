import styles from "./about.module.css";
import datas from "../../datas/aboutList.json"
import Header from "../../components/Header/header";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import Collapse from "../../components/Collapse/collapse"

function About() {
    return (
      <div>
        <div className={styles.container}>
            <Header />
            <Banner />
                <div className={styles.about__body}>
                    {datas.map(data => {
                        return (
                            <Collapse
                                key={data.id}                              
                                title={data.title}
                                content={data.content}
                            />
                        )
                    })}
                </div>          
        </div>
            <Footer />
        </div>
    )
}

export default About;