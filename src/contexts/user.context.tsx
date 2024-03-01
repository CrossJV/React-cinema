import { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserContextProps } from './UserContext.props';


export const UserContext = createContext({});

export const UserContextProvider = ({children}: UserContextProps) => {
	const {0: user, 1: setUser} = useAuth();

	return <UserContext.Provider value={ {user, setUser} }>
		{children}
	</UserContext.Provider>;
};