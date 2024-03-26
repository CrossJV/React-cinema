import { useEffect, useState } from 'react';
import { UserProps } from './User.props';

export function useAuth() {
	const [user, setUser] = useState(null);

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
    
	const auth = ((userInput: string) => {
		let data = JSON.parse(localStorage.getItem('users')!);

		if(data) {
			const index = data.findIndex((user: UserProps) => user.name === userInput);

			if(index != -1) {
				if(user)
				{
					data[index].isLogined = false;
					setUser(null);
				} else {
					data[index].isLogined = true;
					setUser(data[index]);
				}
			} else {
				const newUser = { name: userInput, isLogined: true };
				data = [...data, newUser]
				setUser(newUser);
			}

			localStorage.setItem('users', JSON.stringify(data));
		} else {
			const newUser = { name: userInput, isLogined: true };
			localStorage.setItem('users', JSON.stringify([newUser]));
			setUser(newUser);
		}
	});

	return [user, auth] as const;
}