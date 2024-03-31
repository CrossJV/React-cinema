import { Link } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import Paragraph from '../Paragraph/Paragraph';
import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { userActions } from '../../store/user.slice';

function FilmCard(data: FilmCardProps) {
	const dispatch = useDispatch<AppDispath>();
	const favorites = useSelector((s: RootState) => s.user.user?.favorites);

	const add = () => {
		dispatch(userActions.addFavorite(data))
	}

	const isFav = favorites && favorites.find(i => i.id == data.id);

	return (
		<li className={styles['film-card']}>
			<Link to={`/film/${data.id}`}>
			<div className={styles['poster-wrapper']}>
				<img className={styles['poster-image']} src={data.titlePosterImageModel?.url || '/no_image.svg'} alt={data.titleNameText || 'no_image'} />
			</div>
			<div className={styles['description-wrapper']}>
				<Paragraph className={'film-name'}>{data.titleNameText || ''}</Paragraph>
				
			</div>
			</Link>
			<Favorite 
				isFavorite={isFav ? true : false}
				onClick={add}
			/>
		</li>
	);
}

export default FilmCard;