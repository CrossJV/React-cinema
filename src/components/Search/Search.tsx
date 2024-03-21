import styles from './Search.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Headler from '../Headler/Headler';
import Paragraph from '../Paragraph/Paragraph';
import { BaseSyntheticEvent, useContext } from 'react';
import axios from 'axios';
import { MainContext } from '../../contexts/main.context';

function Search() {
	const { setFilms } = useContext(MainContext);

	const getFilms = async (evt: BaseSyntheticEvent) => {
		evt.preventDefault();
		try {
			const { data } = await axios.get(`https://search.imdbot.workers.dev/?q=${evt.target.search.value}`);
			setFilms && setFilms(data.description);
		} catch(e) {
			console.error(e);
		}
	};

	return (
		<>
			<Headler className={'regular-headler'}>Поиск</Headler>
			<Paragraph className={'regular-paragraph'}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<form className={styles['search-form']} action="#" onSubmit={getFilms}>
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