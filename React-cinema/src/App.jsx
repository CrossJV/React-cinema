import './App.css';
import FilmList from './components/FilmList/FilmList';
import Headler from './components/Headler/Headler';
import Paragraph from './components/Paragraph/Paragraph';
import SearchFrom from './components/SerachForm/Search';
import Header from './layouts/Header/Header';

const DATA_MOCKS = [
	{
		id: 1,
		name: 'Black Widow',
		rating: 324,
		poster: '../public/black_widow.png',
		favorites: false
	},
	{
		id: 2,
		name: 'Shang Chi',
		rating: 124,
		poster: '../public/shang_chi.png',
		favorites: false
	},
	{
		id: 3,
		name: 'Loki',
		rating: 235,
		poster: '../public/loki.png',
		favorites: false
	},
	{
		id: 4,
		name: 'How I Met Your Mother',
		rating: 123,
		poster: '../public/mother.png',
		favorites: false
	},
	{
		id: 5,
		name: 'Money Heist',
		rating: 8125,
		poster: '../public/heist.png',
		favorites: true
	},
	{
		id: 6,
		name: 'Friends',
		rating: 123,
		poster: '../public/friends.png',
		favorites: false
	},
	{
		id: 7,
		name: 'The Big Bang Theory',
		rating: 12,
		poster: '../public/theory.png',
		favorites: false
	},
	{
		id: 8,
		name: 'Two And a Half Men',
		rating: 456,
		poster: '../public/twohalf.png',
		favorites: false
	}
];

function App() {
	return (
		<>
			<Header />
			<main>
				<Headler 
					className={'regular-headler'}
					title={'Поиск'}
				/>
				<Paragraph 
					text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
					className={'regular-paragraph'}
				/>
				<SearchFrom />
				<FilmList data={DATA_MOCKS} />
			</main>
		</>
	);
}

export default App;
