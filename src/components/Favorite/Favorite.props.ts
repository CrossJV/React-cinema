import { ButtonHTMLAttributes } from "react";

export interface FavoriteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isFavorite: boolean;
}