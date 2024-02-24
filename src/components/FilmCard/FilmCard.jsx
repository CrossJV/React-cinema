import Favorite from '../Favorite/Favorite';
import Paragraph from '../Paragraph/Paragraph';
import Rating from '../Rating/Rating';
import styles from './FilmCard.module.css';

function FilmCard({ data }) {
	return (
		<li className={styles['film-card']}>
			<div className={styles['poster-wrapper']}>
				{!!data.rating && <Rating rating={data.rating} />}
				<img className={styles['poster-image']} src={data.poster || '/no_image.svg'} alt={data.name || 'no_image'} />
			</div>
			<div className={styles['description-wrapper']}>
				<Paragraph 
					text={data.name || ''}
					className={'film-name'}
				/>
				<Favorite 
					isFavorite={data.favorites}
					onClick={() => console.log('favorite push')}
				/>
			</div>
		</li>
	);
}

export default FilmCard;