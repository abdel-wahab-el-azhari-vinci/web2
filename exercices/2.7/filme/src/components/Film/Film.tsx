import { SyntheticEvent, useState } from "react";
import "./Film.css";

interface FilmProps {
  title: string;
  director: string;
  duree: number;
  link?: string;
  description?: string;
  budget?: number;
}

const defaultFilms: FilmProps[] = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    duree: 148,
    link: "https://musicart.xboxlive.com/7/c96d1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    description:
      "A mind-bending thriller where a thief enters the dreams of others to steal secrets.",
    budget: 160000000,
  },
  {
    title: "Endgame avengers",
    director: "Jean-Pierre Jeunet",
    duree: 122,
    link: "https://www.chroniquedisney.fr/imgFiliale/marvel/2019-avengers-endgame-01-big.jpg",
    description:
      "A whimsical depiction of contemporary Parisian life, seen through the eyes of a young waitress.",
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    duree: 125,
    link: "https://bamlive.s3.amazonaws.com/styles/program_slide/s3/1200_Miyazaki_Spirited-Away_005.jpg?itok=spUEqLiM",
    description:
      "A young girl becomes trapped in a mysterious and magical world.",
    budget: 19000000,
  },
  {
    title: "The avengers",
    director: "Par moi",
    duree: 180,
    
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duree: 175,
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
  },
];

const Film = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duree, setDuree] = useState(0);
  const [films, setFilms] = useState(defaultFilms);
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSumbmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submit : ", title, director, duree);
    const newFilm = {
      title: title,
      director: director,
      duree: duree,
      link : link,
      description:description,
      budget : budget
    };

    setFilms([...films, newFilm]);
  };

  const handleTitle = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("change in titleInput:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirector = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in directorInput : ", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDuree = (e: SyntheticEvent) => {
    const dureeInput = e.target as HTMLInputElement;
    const dureeInputValue = parseInt(dureeInput.value);
    if (isNaN(dureeInputValue)) {
      console.log("Ce n'est pas un nombre !");
    }
    console.log("change in dureeInput:", dureeInput.value);
    setDuree(dureeInputValue);
  };

  const handleLink = (e: SyntheticEvent) => {
    const linkInput = e.target as HTMLInputElement;
    console.log("change in linkInput:", linkInput.value);
    setLink(linkInput.value);
  };

  const handleDescription = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudget = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    const budgetInputValue = parseInt(budgetInput.value);
    if (isNaN(budgetInputValue)) {
      console.log("Ce n'est pas un nombre !");
    }
    console.log("change in budgetInput:", budgetInput.value);
    setBudget(budgetInputValue);
  };

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
              {film.link && ( <img src={film.link} alt="image" />)} 
              </td>
              <td>{film.description}</td>
              <td>{film.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div >
        <h3>Formulaire d'ajout</h3>

        <form onSubmit={handleSumbmit}>
          <label htmlFor="title">Title : </label>
          <input
            value={title}
            type="text"
            id="title"
            name="title"
            onChange={handleTitle}
            required
          /> <br />
          <label htmlFor="director">Director : </label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            onChange={handleDirector}
            required
          /> <br />
          <label htmlFor="duree">Durée : </label>
          <input
            value={duree}
            type="number"
            id="duree"
            name="duree"
            onChange={handleDuree}
            required
          /> <br />
          <label htmlFor="link">Lien image : </label>
          <input
            value={link}
            type="text"
            id="link"
            name="link"
            onChange={handleLink}
          /> <br />
          <label htmlFor="descritption">Description : </label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            onChange={handleDescription}
          /> <br />
          <label htmlFor="duree">Budget : </label>
          <input
            value={budget}
            type="number"
            id="budget"
            name="budget"
            onChange={handleBudget}
          /> <br />

          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default Film;
