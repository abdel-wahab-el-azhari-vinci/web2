
interface FilmProps {
    id: number;
    title: string;
    director: string;
    duree: number;
    link?: string;
    description?: string;
    budget?: number;
}


interface  FilmContext{
films : FilmProps[];
addFilm : (newFilm:FilmProps)=>void;
setFilms:(films:FilmProps[])=>void;
nextIdFilm:()=>number;

}

export type {FilmContext,FilmProps}