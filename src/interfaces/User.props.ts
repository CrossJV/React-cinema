import { FilmCardProps } from "../components/FilmCard/FilmCard.props";

export interface UserProps {
    name: string,
    isLogined: boolean,
    favorites: FilmCardProps[]
}