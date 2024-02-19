import Favorite from '../Favorite/Favorite';
import Paragraph from '../Paragraph/Paragraph';
import Rating from '../Rating/Rating';
import styles from './FilmCard.module.css';

function FilmCard({ data }) {
	if(data)
	{
		return (
			<li className={styles['film-card']}>
				<div className={styles['poster-wrapper']}>
					<Rating rating={data.rating || 0} />
					<img className={styles['poster-image']} src={data.poster} alt={data.name || 'HZ FILM'} />
				</div>
				<div className={styles['description-wrapper']}>
					<Paragraph 
						text={data.name || 'Нетзвестный фильм'}
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
	
}

export default FilmCard;