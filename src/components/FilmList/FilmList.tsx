import styles from './FilmList.module.css';
import FilmCard from '../FilmCard/FilmCard';
import { FilmCardProps } from '../FilmCard/FilmCard.props';
import { useContext, useEffect } from 'react';
import { MainContext } from '../../contexts/main.context';
import axios from 'axios';

function FilmList() {
	const { films, setFilms } = useContext(MainContext);

	const getFilms = async () => {
		try {
			const { data } = await axios.get(`https://search.imdbot.workers.dev/?q=Avengers`);
			setFilms && setFilms(data.description);
		} catch(e) {
			console.error(e);
			return;
		}
	};

	useEffect(() => {
		getFilms();
	}, [])
	
	if(films) {
		if(!films.length) {
			return <p>Фильмов не найдено</p>;
		}
	
		return (
			<ul className={styles['film-list']}>
				{films.map((elem: FilmCardProps) => {
					return (
						<FilmCard {...elem} key={elem['#IMDB_ID']}/>
					);
				})}
			</ul>
		);
	}
	
}

export default FilmList;
