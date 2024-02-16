import Favorite from '../Favorite/Favorite';
import Paragraph from '../Paragraph/Paragraph';
import styles from './FilmCard.module.css';

function FilmCard({ data }) {
	

	return (
		<li className={styles['film-card']}>
			<div className={styles['poster-wrapper']}>
				<span className={styles['rating']}>{data.rating}</span>
				<img className={styles['poster-image']} src={data.poster} alt={data.name} />
			</div>
			<div className={styles['description-wrapper']}>
				<Paragraph 
					text={data.name}
					className={'film-name'}
				/>
				<Favorite 
					success={data.favorites}
					onClick={() => console.log('favorite push')}
				/>
			</div>
		</li>
	);
}

export default FilmCard;