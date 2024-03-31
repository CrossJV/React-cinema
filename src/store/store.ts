import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./films.slice";
import userSlice from "./user.slice";

export const mainStore = configureStore({
    reducer: {
        films: filmsSlice,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispath = typeof mainStore.dispatch;
