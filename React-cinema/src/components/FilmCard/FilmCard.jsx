import Favorite from '../Favorite/Favorite';
import Paragraph from '../Paragraph/Paragraph';
import './FilmCard.css';

function FilmCard({ data }) {
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
				<Favorite 
					isFavorite={data.favorites}
					onClick={() => console.log('favorite push')}
				/>
			</div>
		</li>
	);
}

export default FilmCard;