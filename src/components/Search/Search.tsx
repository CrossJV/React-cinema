import styles from './Search.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Headler from '../Headler/Headler';
import Paragraph from '../Paragraph/Paragraph';
import { BaseSyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { getFilms } from '../../store/films.slice';

function Search() {
	const dispatch = useDispatch<AppDispath>();

	const getFilmList = async (evt: BaseSyntheticEvent) => {
		evt.preventDefault();
		dispatch(getFilms(evt.target.search.value));
		// const options = {
		// 	method: 'GET',
		// 	url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${evt.target.search.value}`,
		// 	params: {
		// 	  exact: 'true',
		// 	  titleType: 'movie'
		// 	},
		// 	headers: HEADERS
		// };
		// try {
		// 	const { data } = await axios.request(options);
		// 	setFilms && setFilms(data.result);
		// } catch(e) {
		// 	console.error(e);
		// }
	};

	return (
		<>
			<Headler className={'regular-headler'}>Поиск</Headler>
			<Paragraph className={'regular-paragraph'}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<form className={styles['search-form']} action="#" onSubmit={getFilmList}>
				<Input 
					className={'search'}
					placeholder={'Искать'}
					name={'search'}
				/>
				<Button 
					className={'regular-button'}
				>Искать</Button>
			</form>
		</>
		
	);
}

export default Search;