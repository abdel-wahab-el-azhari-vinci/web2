import { Link, useMatch, useOutletContext } from "react-router-dom";
import { FilmContext } from "../../type";
import "./homePage.css";



const HomePage = () => {
   const { films }: FilmContext = useOutletContext();

  return (
    <div>
      <header className="header">
        <h2>New Movie Streaming </h2>
      </header>

      <main className="image-container">
        <img
          src="https://s.tmimgcdn.com/scr/400x250/238800/offbeat-theme-wordpress-polyvalent-pour-agence-de-creation-d39entreprise-et-commerce-electronique_238874-original.jpg"
          alt="image"
        />
      </main>

      <div>
        <h4>My movies : </h4>
        {films.map((film) => (
          <Link key={film.id} to={`/movies/${film.id}`}>
            {film.title}
          </Link>
        ))}
      </div>

      <footer className="footer">
        <p>That's my website</p>
      </footer>
    </div>
  );
};

const MoviePage = () => {
   const { films }: FilmContext = useOutletContext();
  const match = useMatch("/movies/:movieId");
  const movieId = match?.params.movieId;
  if (!movieId) {
    return <p>Movie id not found</p>;
  }
  const film = films.find((film)=>film.id.toString()===movieId);
  if (!film) {
     return <p>Movie not found</p>
  }
  return(
 
   <div>
      <h2>{film.title}</h2>
      <p>Director : {film.director}</p>
      <p>Duree : {film.duree}</p>
      <p>{film.link ? <img src={film.link} alt="image" />:""}</p>
      <p>{film.description ? `Description : ${film.description} `:""}</p>
      <p>{film.budget ? `Budget : ${film.budget}`:""}</p>
      
   </div>
  );
};

export  {HomePage,MoviePage};
