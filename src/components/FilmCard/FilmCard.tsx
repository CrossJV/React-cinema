import { Link } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import Paragraph from '../Paragraph/Paragraph';
import Rating from '../Rating/Rating';
import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props';

function FilmCard(data: FilmCardProps) {
	return (
		<li className={styles['film-card']}>
			<Link to={`/film/${data.id}`}>
			<div className={styles['poster-wrapper']}>
				{!!data.rating && <Rating rating={data.rating} />}
				<img className={styles['poster-image']} src={data.poster || '/no_image.svg'} alt={data.name || 'no_image'} />
			</div>
			<div className={styles['description-wrapper']}>
				<Paragraph className={'film-name'}>{data.name || ''}</Paragraph>
				<Favorite 
					isFavorite={data.favorites || false}
					onClick={() => console.log('favorite push')}
				/>
			</div>
			</Link>
		</li>
	);
}

export default FilmCard;