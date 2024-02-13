import './FilmList.css';
import FilmCard from '../FilmCard/FilmCard';

function FilmList({ data }) {
	const list = data.map(elem => {
		return (
			<FilmCard data={elem} key={elem.id}/>
		);
	});
	return (
		<ul className='film-list'>
			{list}
		</ul>
	);
}

export default FilmList;