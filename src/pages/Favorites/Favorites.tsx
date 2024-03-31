import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FilmCard from "../../components/FilmCard/FilmCard";
import { FilmCardProps } from "../../components/FilmCard/FilmCard.props";
import styles from '../../components/FilmList/FilmList.module.css';
import Headler from "../../components/Headler/Headler";

function Favorites() {
    const favoriteFilms = useSelector((s: RootState) => s.user.user?.favorites);

    return (
        <>
            <Headler className={'regular-headler'}>Избранное</Headler>
            <ul className={styles['film-list']}>
                {favoriteFilms && favoriteFilms.map((elem: FilmCardProps) => {
                    return (
                        <FilmCard {...elem} key={elem.id}/>
                    );
                })}
            </ul>
        </>

    );
}

export default Favorites;