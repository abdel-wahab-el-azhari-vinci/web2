



import { useOutletContext } from "react-router-dom";
import { FilmContext } from "../../../type";
import "./movieListPage.css";



const MovieListPage = () => {
 
  const{films}:FilmContext = useOutletContext();
  

  return (
    <div>
      <h1>Favorite Movies</h1>
      <table className="table">
        <thead>
          <th>Titre</th>
          <th>Directeur</th>
          <th>Durée</th>
          <th>Image</th>
          <th>Description</th>
          <th>Budget</th>
        </thead>
        <tbody>
          {films.map((film) => (
            <tr>
              <td>{film.title}</td>
              <td>{film.director}</td>
              <td>{film.duree}</td>
              <td className="image-container">
              {film.imageUrl && ( <img src={film.imageUrl} alt="image" />)} 
              </td>
              <td>{film.description}</td>
              <td>{film.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default MovieListPage;
