import { Link } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import Paragraph from '../Paragraph/Paragraph';
import Rating from '../Rating/Rating';
import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props';

function FilmCard(data: FilmCardProps) {
	return (
		<li className={styles['film-card']}>
			<Link to={`/film/${data['#IMDB_ID']}`}>
			<div className={styles['poster-wrapper']}>
				{!!data['#RANK'] && <Rating rating={data['#RANK']} />}
				<img className={styles['poster-image']} src={data['#IMG_POSTER'] || '/no_image.svg'} alt={data['#TITLE'] || 'no_image'} />
			</div>
			<div className={styles['description-wrapper']}>
				<Paragraph className={'film-name'}>{data['#TITLE'] || ''}</Paragraph>
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