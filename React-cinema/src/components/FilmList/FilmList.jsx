import './FilmList.css';
import FilmCard from '../FilmCard/FilmCard';

function FilmList({ data }) {
	if(data.length === 0)
	{
		return <p>Фильмов не найдено</p>;
	}
	return (
		<ul className='film-list'>
			{data.map(elem => {
				return (
					<FilmCard data={elem} key={elem.id}/>
				);
			})}
		</ul>
	);
}

export default FilmList;