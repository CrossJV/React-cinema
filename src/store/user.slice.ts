import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserProps } from "../interfaces/User.props";
import { loadUser, login, logout, saveFavorite } from "./storage";
import { FilmCardProps } from "../components/FilmCard/FilmCard.props";

export interface userState {
    user: UserProps | undefined,
}

const initialState: userState = {
    user: loadUser()
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            login(action.payload);
            state.user = loadUser();
        },
        logout: (state) => {
            state.user = undefined;
            logout();
        },
        addFavorite: (state, action: PayloadAction<FilmCardProps>) => {
            if(state.user?.favorites.find(i => i.id === action.payload.id)) {
                state.user.favorites = state.user.favorites.filter(item => {
                    return item.id !== action.payload.id;
                })
            } else {
                state.user?.favorites.push(action.payload);
            }
            saveFavorite(action)
        }
    }
})

export default userSlice.reducer;
export const userActions = userSlice.actions;