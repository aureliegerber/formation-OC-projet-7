import styles from "./card.module.css";
import { Link } from "react-router-dom";

function Card({id, title, cover}) {
	return (
		<article className={styles.gallery__card}>
			<Link to={`/lodging/${id}`}>
				<img src={cover} alt={title} />
				<h3>{title}</h3>	
			</Link>			
		</article>
	)
}

export default Card;