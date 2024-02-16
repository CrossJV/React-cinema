import './Favorite.css';

function Favorite({ success, onClick })
{
	const label = success ? 'В избранном' : 'В избранное';

	return (
		<button onClick={onClick} className={`favorites ${success ? 'success' : ''}`}>{label}</button>
	);
}

export default Favorite;