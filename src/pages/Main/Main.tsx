import FilmList from "../../components/FilmList/FilmList";
import Search from "../../components/Search/Search";

const DATA_MOCKS = [
	{
		id: 1,
		name: 'Black Widow',
		rating: 324,
		poster: '/black_widow.png',
		favorites: false
	},
	{
		id: 2,
		name: 'Shang Chi',
		rating: 124,
		poster: '/shang_chi.png',
		favorites: false
	},
	{
		id: 3,
		name: 'Loki',
		rating: 235,
		poster: '/loki.png',
		favorites: false
	},
	{
		id: 4,
		name: 'How I Met Your Mother',
		rating: 123,
		poster: '/mother.png',
		favorites: false
	},
	{
		id: 5,
		name: 'Money Heist',
		rating: 8125,
		poster: '/heist.png',
		favorites: true
	},
	{
		id: 6,
		name: 'Friends',
		rating: 123,
		poster: '/friends.png',
		favorites: false
	},
	{
		id: 7,
		name: 'The Big Bang Theory',
		rating: 12,
		poster: '/theory.png',
		favorites: false
	},
	{
		id: 8,
		name: 'Two And a Half Men',
		rating: 456,
		poster: '/twohalf.png',
		favorites: false
	}
];


function Main() {
    return (
        <>
            <Search />
            <FilmList data={DATA_MOCKS} />
        </>
    );
}

export default Main;