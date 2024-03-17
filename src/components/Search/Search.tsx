import styles from './Search.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Headler from '../Headler/Headler';
import Paragraph from '../Paragraph/Paragraph';
import { BaseSyntheticEvent } from 'react';

function Search() {
	const formHandler = (evt: BaseSyntheticEvent) => {
		evt.preventDefault();
		console.log('search');
	};

	return (
		<>
			<Headler className={'regular-headler'}>Поиск</Headler>
			<Paragraph className={'regular-paragraph'}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<form className={styles['search-form']} action="#" onSubmit={formHandler}>
				<Input 
					className={'search'}
					placeholder={'Искать'}
					name={'search'}
				/>
				<Button 
					onClick={() => {console.log('Искать');}}
					className={'regular-button'}
				>Искать</Button>
			</form>
		</>
		
	);
}

export default Search;