import styles from './FilmList.module.css';
import FilmCard from '../FilmCard/FilmCard';
import { FilmCardProps } from '../FilmCard/FilmCard.props';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { getFilms } from '../../store/films.slice';

function FilmList() {
	const dispatch = useDispatch<AppDispath>();
	const films = useSelector((s: RootState) => s.films.films);

	useEffect(() => {
		if(!films.length) {
			dispatch(getFilms('batman'))
		}
	}, [])

	if(films) {
		if(!films.length) {
			return <p>Фильмов не найдено</p>;
		}
		
		return (
			<ul className={styles['film-list']}>
				{films.map((elem: FilmCardProps) => {
					return (
						<FilmCard {...elem} key={elem.id}/>
					);
				})}
			</ul>
		);
	}
	
}

export default FilmList;
