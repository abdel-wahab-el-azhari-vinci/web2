
import './App.css'

import {  Outlet, useNavigate } from "react-router-dom";
import {  useState } from "react";
import { FilmContext, FilmProps } from '../../../type';


const NavBar = ()=>{

    const navigate = useNavigate();

    return(

      <nav className='nav'>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/cinemaPage")}>Cinema Page</button>
        <button onClick={()=>navigate("/movieListePage")}>Movie List Page</button>
        <button onClick={()=>navigate("/addMovie")}>Add Movie</button>
      </nav>
    );

}



const defaultFilms: FilmProps[] = [
  {
    id :1,
    title: "Inception",
    director: "Christopher Nolan",
    duree: 148,
    link: "https://musicart.xboxlive.com/7/c96d1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    description:
      "A mind-bending thriller where a thief enters the dreams of others to steal secrets.",
    budget: 160000000,
  },
  { 
    id : 2,
    title: "Endgame avengers",
    director: "Jean-Pierre Jeunet",
    duree: 122,
    link: "https://www.chroniquedisney.fr/imgFiliale/marvel/2019-avengers-endgame-01-big.jpg",
    description:
      "A whimsical depiction of contemporary Parisian life, seen through the eyes of a young waitress.",
  },
  { 
    id: 4,
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    duree: 125,
    link: "https://bamlive.s3.amazonaws.com/styles/program_slide/s3/1200_Miyazaki_Spirited-Away_005.jpg?itok=spUEqLiM",
    description:
      "A young girl becomes trapped in a mysterious and magical world.",
    budget: 19000000,
  },
  {
    id: 5,
    title: "The avengers",
    director: "Par moi",
    duree: 180,
    
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
  },
  { 
    id:6,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duree: 175,
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
  },
];


function App() {
  const [films, setFilms] = useState(defaultFilms);

  const nextIdFilm =()=>{
    return films.length+1;
  }

  const addFilm = (newFilm: FilmProps) => {
    newFilm.id = nextIdFilm();
    const filmAdded = { ...newFilm };

    setFilms([...films, filmAdded]);

  };

  const filmContext : FilmContext={
    addFilm,
    films,
    setFilms,
    nextIdFilm,

  }
 
 
  

  return (
    <>
      <NavBar />
      <Outlet context={filmContext} />
    </>
  )
}


export default App;
