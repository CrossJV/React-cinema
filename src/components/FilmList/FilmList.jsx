import styles from './FilmList.module.css';
import FilmCard from '../FilmCard/FilmCard';

function FilmList({ data }) {
	if(!data.length) 
	{
		return <p>Фильмов не найдено</p>;
	}
	return (
		<ul className={styles['film-list']}>
			{data.map(elem => {
				return (
					<FilmCard data={elem} key={elem.id}/>
				);
			})}
		</ul>
	);
}

export default FilmList;