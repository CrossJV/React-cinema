import { BaseSyntheticEvent, useState } from "react";
import FilmList from "../../components/FilmList/FilmList";
import Search from "../../components/Search/Search";
import axios from "axios";

// const data = [
// 	{
// 		id: 1,
// 		name: 'Black Widow',
// 		rating: 324,
// 		poster: '/black_widow.png',
// 		favorites: false
// 	},
// 	{
// 		id: 2,
// 		name: 'Shang Chi',
// 		rating: 124,
// 		poster: '/shang_chi.png',
// 		favorites: false
// 	},
// 	{
// 		id: 3,
// 		name: 'Loki',
// 		rating: 235,
// 		poster: '/loki.png',
// 		favorites: false
// 	},
// 	{
// 		id: 4,
// 		name: 'How I Met Your Mother',
// 		rating: 123,
// 		poster: '/mother.png',
// 		favorites: false
// 	},
// 	{
// 		id: 5,
// 		name: 'Money Heist',
// 		rating: 8125,
// 		poster: '/heist.png',
// 		favorites: true
// 	},
// 	{
// 		id: 6,
// 		name: 'Friends',
// 		rating: 123,
// 		poster: '/friends.png',
// 		favorites: false
// 	},
// 	{
// 		id: 7,
// 		name: 'The Big Bang Theory',
// 		rating: 12,
// 		poster: '/theory.png',
// 		favorites: false
// 	},
// 	{
// 		id: 8,
// 		name: 'Two And a Half Men',
// 		rating: 456,
// 		poster: '/twohalf.png',
// 		favorites: false
// 	}
// ];


function Main() {
	const [films, setFilms] = useState([]);

	const getFilms = async (evt: BaseSyntheticEvent) => {
		evt.preventDefault();
		try {
			const { data } = await axios.get(`https://search.imdbot.workers.dev/?q=${evt.target.search.value}`);
			setFilms(data.description);
		} catch(e) {
			console.error(e);
		}
	};

    return (
        <>
            <Search formHandler={getFilms} />
            <FilmList data={films} />
        </>
    );
}

export default Main;