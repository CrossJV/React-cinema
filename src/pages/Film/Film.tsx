import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { FilmProps } from "./FilmProps";
import styles from './style.module.css';
import cn from 'classnames';
import Headler from "../../components/Headler/Headler";
import Paragraph from "../../components/Paragraph/Paragraph";
import Rating from "../../components/Rating/Rating";
import Favorite from "../../components/Favorite/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { userActions } from "../../store/user.slice";
import { FilmCardProps } from "../../components/FilmCard/FilmCard.props";

function Film() {
    const data = useLoaderData() as {data: FilmProps};
    const dispatch = useDispatch<AppDispath>();
	const favorites = useSelector((s: RootState) => s.user.user?.favorites);

	const add = (data: FilmCardProps) => {
		dispatch(userActions.addFavorite(data))
	}

    return (
        <div className={cn(styles['film-card-detail'])}>
            <Suspense fallback={<>Загрузка...</>}>
                <Await resolve={data.data}>
                    {({data}: {data: FilmProps}) => (
                        <>
                            <div className={cn(styles['film-card-title'])}>
                                <Headler className={'film-card-title-headler'}>{data.titleText.text}</Headler>
                            </div>
                            <img className={cn(styles['film-card-poster'])} src={data.primaryImage.url} alt={data.titleText.text} />
                            <div className={cn(styles['film-card-description'])}>
                                <Paragraph className={'film-card-description-text'}>
                                    {data.plot.plotText.plainText}
                                </Paragraph>
                                <div className={cn(styles['film-card-rating'])}>
                                    <div className={cn(styles['film-card-rating-wrapper'])}>
                                        <Rating rating={data.ratingsSummary.aggregateRating} />
                                    </div>
                                    <Favorite 
                                        isFavorite={favorites && favorites.find(i => i.id == data.id) ? true : false}
                                        onClick={() => {add({
                                                id: data.id,
                                                titleNameText: data.titleText.text,
                                                titlePosterImageModel: {
                                                    url: data.primaryImage.url
                                                }                       
                                        })}}
                                    />
                                </div>
                                <div className={cn(styles['film-card-prop'])}>
                                    <span className={cn(styles['film-card-prop-label'])}>Тип</span>
                                    <span className={cn(styles['film-card-prop-desc'])}>{data.titleType.text}</span>
                                </div>
                                <div className={cn(styles['film-card-prop'])}>
                                    <span className={cn(styles['film-card-prop-label'])}>Дата выхода</span>
                                    <span className={cn(styles['film-card-prop-desc'])}>{new Date(`${data.releaseDate.year}-${data.releaseDate.month}-${data.releaseDate.day}`).toISOString().split('T')[0]}</span>
                                </div>
                                <div className={cn(styles['film-card-prop'])}>
                                    <span className={cn(styles['film-card-prop-label'])}>Длительность</span>
                                    <span className={cn(styles['film-card-prop-desc'])}>{Math.floor(data.runtime.seconds / 60)} мин</span>
                                </div>
                                <div className={cn(styles['film-card-prop'])}>
                                    <span className={cn(styles['film-card-prop-label'])}>Жанр</span>
                                    <span className={cn(styles['film-card-prop-desc'])}>{data.genres.genres.map(g => g.text).join(', ')}</span>
                                </div>
                            </div>
                            <div className={cn(styles['film-card-reviews'])}>
                                <span className={cn(styles['film-card-prop-label'])}>Отзывы</span>
                                {
                                    data.featuredReviews.edges && data.featuredReviews.edges.map(elem => {
                                        return (
                                        <div className={cn(styles['film-card-title'])}>
                                            <div className={cn(styles['film-card-reviews-title'])}>
                                                <span className={cn(styles['film-card-reviews-title-name'])}>{elem.node.summary.originalText}</span>
                                                <span className={cn(styles['film-card-reviews-title-date'])}>{elem.node.submissionDate}</span>
                                            </div>
                                            <div className={cn(styles['film-card-reviews-review'])}>
                                                {elem.node.text.originalText.plainText}
                                            </div>
                                        </div>)
                                    })
                                } 
                            </div>
                        </>
                    )}
                </Await>
            </Suspense>
        </div>
    );
}

export default Film;