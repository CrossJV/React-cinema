const TYPE = '@type';

export interface FilmProps {
    short: {
        [TYPE]: string,
        name: string,
        image: string,
        description: string,
        genre: string[],
        datePublished: string,
        duration: string,
        aggregateRating: {
            [TYPE]: string,
            ratingCount: number
            bestRating: number
            worstRating: number
            ratingValue: number
        }
    }
}