import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import './FilmCard.css';

function FilmCard({ data }) {
	const favorites = data.favorites ? 'В избранном' : 'В избранное';
	const cl = data.favorites ? 'favorites succes' : 'favorites';

	return (
		<li className='film-card'>
			<div className='poster-wrapper'>
				<span className='rating'>{data.rating}</span>
				<img className='poster-image' src={data.poster} alt={data.name} />
			</div>
			<div className="description-wrapper">
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