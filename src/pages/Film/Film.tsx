import { Await, useLoaderData } from "react-router-dom";
import { FilmCardProps } from "../../components/FilmCard/FilmCard.props";
import { Suspense } from "react";

function Film() {
    const data = useLoaderData() as {data: FilmCardProps}

    return (
        <>
            <Suspense fallback={<>Загрузка...</>}>
                <Await resolve={data.data}>
                    {({data}: {data: FilmCardProps}) => (
                        <>Film - {data["#TITLE"]}</>
                    )}
                </Await>
            </Suspense>
        </>
    );
}

export default Film;