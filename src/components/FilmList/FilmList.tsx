import styles from './FilmList.module.css';
import FilmCard from '../FilmCard/FilmCard';
import { FilmListProps } from './FilmList.props';

function FilmList(data: FilmListProps[]) {
	if(!data.length) {
		return <p>Фильмов не найдено</p>;
	}
	return (
		<ul className={styles['film-list']}>
			{data.map((elem: FilmListProps) => {
				return (
					<FilmCard {...elem} id={Number(elem.id)} key={Number(elem.id)}/>
				);
			})}
		</ul>
	);
}

export default FilmList;
