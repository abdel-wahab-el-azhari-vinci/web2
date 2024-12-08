
interface FilmProps {
    id: number;
    title: string;
    director: string;
    duree: number;
    imageUrl: string;
    description?: string;
    budget?: number;
}

type NewFilmProps = Omit<FilmProps, "id">;

interface  FilmContext{
films : FilmProps[];
addFilm : (newFilm:NewFilmProps)=>Promise<void>;
setFilms:(films:FilmProps[])=>void;
nextIdFilm:()=>number;
removeMovie:(id:number)=>Promise<void>;

}

export type {FilmContext,FilmProps,NewFilmProps}