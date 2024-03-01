import { HTMLAttributes } from "react";
import { FilmCardProps } from "../FilmCard/FilmCard.props";

export interface FilmListProps extends HTMLAttributes<HTMLUListElement> {
    data: FilmCardProps[]
}