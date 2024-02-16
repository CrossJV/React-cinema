import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import styles from './FilmCard.module.css';

function FilmCard({ data }) {
	const favorites = data.favorites ? 'В избранном' : 'В избранное';
	const cl = data.favorites ? 'succes' : 'favorites';

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
				<Button 
					name={favorites}
					onClick={() => console.log('favorite push')}
					className={cl}
				/>
			</div>
		</li>
	);
}

export default FilmCard;