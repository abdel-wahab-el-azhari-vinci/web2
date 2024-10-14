
interface Film{
  id:number;
  title:string;
  director:string
  duration:number;
  budget?:number;
  description?:string;
  imageUrl?:string;
}
interface Text{
  id:string;
  content:string;
  level:"easy"|"medium" |"hard";
}

type NewFilm = Omit<Film, "id">;
type NewTexte= Omit<Text,"id">;



export type { Film,NewFilm ,Text,NewTexte};
