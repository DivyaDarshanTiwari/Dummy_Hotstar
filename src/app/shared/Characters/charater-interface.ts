export interface info{
    "count": number,
    "totalPages": number,
    "previousPage": number,
    "nextPage": string
}

export interface CharaterInterface {
        "_id": number,
        "films": string[],
        "shortFilms": string[],
        "tvShows": string[]
        "videoGames": string[],
        "parkAttractions": [],
        "allies": [],
        "enemies": [],
        "sourceUrl": string
        "name": string,
        "imageUrl": string,
        "createdAt": string,
        "updatedAt": string,
        "url": string,
        "__v": number
}

