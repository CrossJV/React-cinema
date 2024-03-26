import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { FilmProps } from "./FilmProps";

function Film() {
    const data = useLoaderData() as {data: FilmProps}

    return (
        <>
            <Suspense fallback={<>Загрузка...</>}>
                <Await resolve={data.data}>
                    {({data}: {data: FilmProps}) => (
                        <>Film - {data.short.name}</>
                    )}
                </Await>
            </Suspense>
        </>
    );
}

export default Film;