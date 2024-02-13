import './App.css';
import Headler from './components/Headler/Headler';
import Paragraph from './components/Paragraph/Paragraph';
import SearchFrom from './components/SerachForm/SearchForm';
import Header from './layouts/Header/Header';

function App() {
	return (
		<>
			<Header />
			<main>
				<Headler 
					type={'regular-headler'}
					title={'Поиск'}
				/>
				<Paragraph 
					text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
					type={'regular-paragraph'}
				/>
				<SearchFrom />
			</main>
		</>
	);
}

export default App;
