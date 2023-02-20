import "./lodging.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from "../../datas/lodgingList.json"
import Header from "../../components/Header/header";
import Carousel from "../../components/Carousel/carousel"
import Footer from "../../components/Footer/footer";
import Collapse from "../../components/Collapse/collapse";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";
import styles from "./lodging.module.css";

function Lodging() {	

	const idLodging = useParams("id").id;
	const dataLodging = datas.filter(data => data.id === idLodging);
	const lodgingPictures = dataLodging[0].pictures;
	const title = dataLodging[0].title;
	const location = dataLodging[0].location;
	const tags = dataLodging[0].tags;
	console.log(tags);
	const name = dataLodging[0].host.name;
	const picture = dataLodging[0].host.picture;
	const rating = dataLodging[0].rating;
	const description  = dataLodging[0].description;
	const equipments = dataLodging[0].equipments;
	console.log(equipments);
	
	return (
		<div>
			<div className={styles.container}>
				<Header />
				<Carousel         
					array={lodgingPictures}
					/>
					<div className={styles.lodging__infos}>
						<div className={styles.lodging__titles}>
							<h1>{title}</h1>
							<h2>{location}</h2>
							<div className={styles.lodging__tags}>
								{tags.map((tag, index) => {
									return (
										<button key={index}>{tag}</button>
									)
								})}
							</div>						
						</div>
						<div className={styles.infos__aside}>
							<div className={styles.lodging__host}>
								<p className={styles.host__name}>{name}</p>
								<img src={picture} className={styles.host__picture} alt="Hôte"/>
							</div>
							<span className={styles.lodging__rating}>
								{[...Array(5)].map((star, index) => {
									console.log(rating);
									let ratingValue = index + 1;
									return (
										<img key={index} src={ratingValue <= rating ? redStar : greyStar} className={styles.rating__star} alt={"Nombre d'étoiles " + rating} />
									)
								})}
							</span>
						</div>
					</div>
				<div className={styles.lodging__description}>
					<Collapse                                
						title="Description"
						content={description}						
					/>
					<Collapse                                
						title="Équipements"
						content={equipments.map((equipment, index) => {
							return (
								<li key={index} className={styles.equipments__list}>{equipment}</li>
							)
						})}						
					/>					
				</div>
			</div>
			<Footer />
		</div>
  )
		
}

export default Lodging;

/*<>
			<Header />
			<Carousel />
			<main className="lodging">
				<div className="lodging__content">
					<div className="lodging__content__infos">
						<h1>{dataCurrentLodging[0].title}</h1>
						<p>{dataCurrentLodging[0].location}</p>
						<div>
							{dataCurrentLodging[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="lodging__content__host">
						<div>
							<div className="lodging__content__host__name">
								<span>{name}</span>								
							</div>
							<img src={dataCurrentLodging[0].host.picture} alt="host of this accomodation" />
						</div>
							
						<div className="lodging__content__host__stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="lodging__collapse">
					<div className="lodging__collapse__item">
						<Collapse title={"Description"} content={description} />	
					</div>
					<div className="lodging__collapse__item">
						<Collapse title={"Équipements"} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)*/