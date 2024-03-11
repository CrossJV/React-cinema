import { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserContextProps } from './UserContext.props';

type IUserContext = {
	user?: {
		name: string,
		isLogined: boolean
	} | null,
	setUser?: (value: string) => void
};

export const UserContext = createContext<IUserContext>({});

export const UserContextProvider = ({children}: UserContextProps) => {
	const [user, setUser] = useAuth();

	return <UserContext.Provider value={ {user: user, setUser: setUser} }>
		{children}
	</UserContext.Provider>;
};