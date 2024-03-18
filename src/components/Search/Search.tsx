import styles from './Search.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Headler from '../Headler/Headler';
import Paragraph from '../Paragraph/Paragraph';
import { FormEventHandler } from 'react';

function Search({ formHandler }: {formHandler: FormEventHandler<HTMLFormElement>}) {
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