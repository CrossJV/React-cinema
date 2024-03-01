import { useEffect, useState } from 'react';
import { UserProps } from './User.props';

export function useAuth()
{
	const {0: user, 1: setUser} = useState('');

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('users')!);
		if(data)
		{
			const logined = data.filter((user: UserProps) => {
				return user.isLogined;
			});

			if(logined.length)
			{
				setUser(logined[0]);
			}
		}
	}, []);
    
	const auth = ((userName: string) => {
		const data = JSON.parse(localStorage.getItem('users')!);

		if(data)
		{
			const index = data.findIndex((user: UserProps) => user.name === userName);

			if(user)
			{
				data[index].isLogined = false;
				setUser('');
			} else {
				data[index].isLogined = true;
				setUser(data[index]);
			}

			localStorage.setItem('users', JSON.stringify(data));
		}
	});

	return [user, auth];
}