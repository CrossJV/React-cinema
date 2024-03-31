import { PayloadAction } from "@reduxjs/toolkit";
import { FilmCardProps } from "../components/FilmCard/FilmCard.props";
import { UserProps } from "../interfaces/User.props";

export function loadFavorites(): FilmCardProps[] | [] {
	try {
        const data = JSON.parse(localStorage.getItem('users')!);
		
        const user = data.filter((user: UserProps) => {
            return user.isLogined
        })[0];
		if(!user.favorites) {
			return [];
		}
		return user.favorites;
	} catch(e) {
		console.error(e);
		return [];
	}
}

export function saveFavorite(action: PayloadAction<FilmCardProps>) {
	const data = JSON.parse(localStorage.getItem('users')!);
		
    const user = data.filter((user: UserProps) => {
        return user.isLogined
    })[0]
    const inFavorites = user.favorites.find((i: FilmCardProps) => i.id == action.payload.id);

    if(inFavorites) {
        user.favorites = user.favorites.filter((elem : FilmCardProps) => {
            return elem.id != action.payload.id
        })
    } else {
        user.favorites = [...user.favorites, action.payload];
    }
    
	localStorage.setItem('users', JSON.stringify([...data.map((elem: UserProps) => {
        if(elem.name == user.name) {
            return {
                ...user
            }
        }
        return elem;
    })]));
}

export function loadUser(): UserProps | undefined {
    const data = JSON.parse(localStorage.getItem('users')!);
    if(data)
    {
        const logined = data.filter((user: UserProps) => {
            return user.isLogined;
        })[0];

        return logined;
    }
}

export function login(userInput: string) {
    let data = JSON.parse(localStorage.getItem('users')!);

    if(data) {
        const index = data.findIndex((user: UserProps) => user.name === userInput);

        if(index != -1) {
            data[index].isLogined = true;
        } else {
            const newUser = { name: userInput, isLogined: true, favorites: [] };
            data = [...data, newUser];
        }

        localStorage.setItem('users', JSON.stringify(data));
    } else {
        const newUser = { name: userInput, isLogined: true, favorites: [] };
        localStorage.setItem('users', JSON.stringify([newUser]));
    }
}

export function logout() {
    let data = JSON.parse(localStorage.getItem('users')!);

    if(data) {
        const user = data.filter((user: UserProps) => {
            return user.isLogined
        })[0];
        const index = data.findIndex((u: UserProps) => u.name === user.name);

        if(index == -1) {
            return;
        }
        data[index].isLogined = false;

        localStorage.setItem('users', JSON.stringify(data));
    }
}