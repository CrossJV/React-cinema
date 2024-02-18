import './Favorite.css';

function Favorite({ isFavorite, onClick }) {
	const label = isFavorite ? 'В избранном' : 'В избранное';

	return (
		<button onClick={onClick} className={`favorites ${isFavorite ? 'success' : ''}`}>{label}</button>
	);
}

export default Favorite;