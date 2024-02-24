import styles from './Search.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Headler from '../Headler/Headler';
import Paragraph from '../Paragraph/Paragraph';

function Search() {
	const formHandler = (evt) => {
		evt.preventDefault();
		console.log('search');
	};

	return (
		<>
			<Headler 
				className={'regular-headler'}
				title={'Поиск'}
			/>
			<Paragraph 
				text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
				className={'regular-paragraph'}
			/>
			<form className={styles['search-form']} action="#" onSubmit={formHandler}>
				<Input 
					className={'search'}
					placeholder={'Искать'}
					name={'search'}
				/>
				<Button 
					label={'Искать'}
					onClick={() => {console.log('Искать');}}
					className={'regular-button'}
				/>
			</form>
		</>
		
	);
}

export default Search;