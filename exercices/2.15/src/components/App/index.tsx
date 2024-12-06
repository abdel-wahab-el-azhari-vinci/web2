import "./App.css";

import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FilmContext, FilmProps,NewFilmProps } from "../../../type";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinemaPage")}>Cinema Page</button>
      <button onClick={() => navigate("/movieListePage")}>
        Movie List Page
      </button>
      <button onClick={() => navigate("/addMovie")}>Add Movie</button>
    </nav>
  );
};

function App() {
  const [films, setFilms] =useState<FilmProps[]>([]);


  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const filmsList = await getAllFilms();
      setFilms(filmsList);
    } catch (err) {
      console.error("fetchFilms::error: ", err);
    }
  };

  async function getAllFilms() {

    try {

      const response = await fetch("/api/films");


      if (!response.ok)

        throw new Error(

          `fetch error : ${response.status} : ${response.statusText}`

        );


      const movies = await response.json();


      return movies;

    } catch (err) {

      console.error("getAllFilms::error: ", err);
      throw err;

    }

  }

  const nextIdFilm = () => {
    return films.length + 1;
  };

  const addFilm = async (newFilm: NewFilmProps) => {
   

    try {
      const options = {
        method: "POST",

        body: JSON.stringify(newFilm),

        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("/api/films", options);
      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      const filmAdded = await response.json();
      setFilms([...films, filmAdded]);
    } catch (err) {
      console.log(JSON.stringify(newFilm));
      console.error("addFilm::error: ", err);
    }
  };

  const filmContext: FilmContext = {
    addFilm,
    films,
    setFilms,
    nextIdFilm,
  };

  return (
    <>
      <NavBar />
      <Outlet context={filmContext} />
    </>
  );
}

export default App;
