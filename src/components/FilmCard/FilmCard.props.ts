const ID = '#IMDB_ID';
const TITLE = '#TITLE';
const RATING = '#RANK';
const POSTER = '#IMG_POSTER';

export interface FilmCardProps {
    [ID]: string
    [TITLE]: string
    [RATING]: number
    [POSTER]: string
    favorites: boolean
}