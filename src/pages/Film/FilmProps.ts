export interface FilmProps {
    id: string,
    titleText: {
        text: string
    },
    titleType: {
        text: string
    },
    ratingsSummary: {
        aggregateRating: number,
        voteCount: number
    },
    primaryImage: {
        url: string
    },
    plot: {
        plotText: {
            plainText: string
        }
    },
    runtime: {
        seconds: number 
    },
    genres: {
        genres: {
            text: string
        }[]
    },
    featuredReviews: {
        edges: {
            node: {
                author: {
                    nickName: string
                },
                summary: {
                    originalText: string
                },
                text: {
                    originalText: {
                        plainText: string
                    }
                },
                submissionDate: string
            }
        }[]
    },
    releaseDate: {
        day: number,
        month: number,
        year: number
    }
}