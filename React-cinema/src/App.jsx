import './App.css';
import Button from './components/Button/Button';
import Headler from './components/Headler/Headler';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
	return (
		<>
			<Headler 
				type={'regular-headler'}
				title={'Поиск'}
			/>
			<Paragraph 
				text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
				type={'regular-paragraph'}
			/>
			<Button 
				name={'Искать'}
			/>
		</>
	);
}

export default App;
