import { SyntheticEvent, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { FilmContext } from "../../../type";


const  AddMoviePage=()=>{
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duree, setDuree] = useState(0);
     
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(0);
    const {addFilm,nextIdFilm}:FilmContext = useOutletContext();
    const navigate = useNavigate();
  
   
         const handleSumbmit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log("submit : ", title, director, duree);
        const newFilm = {
          id : nextIdFilm(),
          title: title,
          director: director,
          duree: duree,
          link : link,
          description:description,
          budget : budget
        };
         addFilm(newFilm);
         navigate("/movieListePage");
        //setFilms([...films, newFilm]);
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
    }

 return(
   
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
 );



}

export default AddMoviePage;


