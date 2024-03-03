import styles from './FilmList.module.css';
import FilmCard from '../FilmCard/FilmCard';
import { FilmCardProps } from '../FilmCard/FilmCard.props';
import { FilmListProps } from './FilmList.props';

function FilmList(props: FilmListProps) {
	if(!props.data.length) {
		return <p>Фильмов не найдено</p>;
	}

	return (
		<ul className={styles['film-list']}>
			{props.data.map((elem: FilmCardProps) => {
				return (
					<FilmCard {...elem} id={Number(elem.id)} key={Number(elem.id)}/>
				);
			})}
		</ul>
	);
}

export default FilmList;
