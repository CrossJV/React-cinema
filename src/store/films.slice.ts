import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { HEADERS } from "../helpers/Api";


const initialState = {
    films: []
}

export const getFilms = createAsyncThunk('films/get', 
    async (name: string) => {
        const options = {
            method: 'GET',
            url: 'https://imdb146.p.rapidapi.com/v1/find/',
            params: {query: name},
            headers: HEADERS
        };
        try {
            const { data } = await axios.request(options);
            return data.titleResults.results;
        } catch(e) {
            if(e instanceof AxiosError) {
				throw new Error(e.response?.data.message);
			}
        }
    }
)

export const searchFilm = createAsyncThunk('film/search',
    async (id: string) => {
        const options = {
			method: 'GET',
            url: 'https://imdb146.p.rapidapi.com/v1/title/',
            params: {id: id},
			headers: HEADERS
		};
		try {
			const { data } = await axios.request(options);
			return data;
		} catch(e) {
            if(e instanceof AxiosError) {
				throw new Error(e.response?.data.message);
			}
		}
    }
)

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getFilms.fulfilled, (state, action) => {
            if(!action.payload) {
                return;
            }
            state.films = action.payload;
        }),
        builder.addCase(getFilms.rejected, (_, action) => {
            console.error(action.error.message);
        }),
        builder.addCase(searchFilm.fulfilled, (state, action) => {
            if(!action.payload) {
                return;
            }
            state.films = action.payload;
        }),
        builder.addCase(searchFilm.rejected, (_, action) => {
            console.error(action.error.message);
        })
    }
})

export default filmsSlice.reducer;
export const filmsActions = filmsSlice.actions;