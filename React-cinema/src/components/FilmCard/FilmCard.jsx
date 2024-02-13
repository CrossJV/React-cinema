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
				<p className='film-name'>{data.name}</p>
				<button className={cl}>{favorites}</button>
			</div>
		</li>
	);
}

export default FilmCard;