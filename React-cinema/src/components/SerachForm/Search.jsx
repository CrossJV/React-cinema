import styles from './Search.module.css';
import Input from '../Input/Input ';
import Button from '../Button/Button';

function Search() {
	const formHandler = (evt) => {
		evt.preventDefault();
		console.log('search');
	};

	return (
		<form className={styles['search-form']} action="#" onSubmit={formHandler}>
			<Input 
				className={'search'}
				placeholder={'Искать'}
			/>
			<Button 
				label={'Искать'}
				onClick={() => {console.log('Искать');}}
				className={'regular-button'}
			/>
		</form>
	);
}

export default Search;