import { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';


export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
	const {0: user, 1: setUser} = useAuth();

	return <UserContext.Provider value={ {user, setUser} }>
		{children}
	</UserContext.Provider>;
};