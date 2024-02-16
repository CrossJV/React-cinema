import styles from './SearchForm.module.css';
import Input from '../Input/Input ';
import Button from '../Button/Button';

function SearchFrom() {
	const formHandler = (evt) => {
		evt.preventDefault();
		console.log('search');
	};

	return (
		<form className={styles['search-form']} action="#" onSubmit={formHandler}>
			<Input 
				className={'search'}
			/>
			<Button 
				name={'Искать'}
				onClick={() => {console.log('Искать');}}
				className={'regular-button'}
			/>
		</form>
	);
}

export default SearchFrom;