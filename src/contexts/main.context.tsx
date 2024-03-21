import { SetStateAction, createContext, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { MainContextProps } from './MainContext.props';
import { FilmCardProps } from '../components/FilmCard/FilmCard.props';

type IMainContext = {
	user?: {
		name: string,
		isLogined: boolean
	} | null,
	setUser?: (value: string) => void,
	films?: FilmCardProps[],
	setFilms?: (value: SetStateAction<never[]>) => void
};

export const MainContext = createContext<IMainContext>({});

export const MainContextProvider = ({children}: MainContextProps) => {
	const [user, setUser] = useAuth();
	const [films, setFilms] = useState([]);

	return <MainContext.Provider value={ {user: user, setUser: setUser, films: films, setFilms: setFilms} }>
		{children}
	</MainContext.Provider>;
};