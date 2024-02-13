import './SearchForm.css';
import Input from '../Input/Input ';
import Button from '../Button/Button';

function SearchFrom() {
	const formHandler = (evt) => {
		evt.preventDefault();
		console.log('search');
	};

	return (
		<form className='search-form' action="#" onSubmit={formHandler}>
			<Input 
				className={'search'}
			/>
			<Button 
				name={'Искать'}
				onClick={() => {console.log('Искать');}}
			/>
		</form>
	);
}

export default SearchFrom;