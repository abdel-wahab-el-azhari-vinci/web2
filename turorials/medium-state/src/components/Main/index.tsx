import sound from "../../assets/sounds/Infecticide-11-Pizza-Spinoza.mp3";
import "./Main.css";
import PizzaMenu from "./PizzaMenu";
import DrinkCard from "./DrinkCard";
import DrinkMenu from "./DrinkMenu";
import { SyntheticEvent, useState } from "react";
import { Pizza } from "../../types";





const Main = () => {
  const defaultPizzas = [
    {
      id: 1,
      title: "4 fromages",
      content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates",
    },
    {
      id: 2,
      title: "Vegan",
      content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons",
    },
    {
      id: 3,
      title: "Vegetarian",
      content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",
    },
    {
      id: 4,
      title: "Alpage",
      content: "Gruyère, Mozarella, Lardons, Tomates",
    },
    {
      id: 5,
      title: "Diable",
      content: "Tomates, Mozarella, Chorizo piquant, Jalapenos",
    },
  ];

  const [pizza, setPizza] = useState("");
  const [description, setDescription] = useState("");
  const [pizzas,setPizzas] = useState(defaultPizzas);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submit:", pizza, description);
    const newPizza = {
      id: nextPizzaId(pizzas),
      title: pizza,
      content: description,
    };
    
    setPizzas([...pizzas, newPizza]);
  };

 

  const handlePizzaChange = (e: SyntheticEvent) => {
    const pizzaInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", pizzaInput.value);
    setPizza(pizzaInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  return (
    <main>
      <p>My HomePage</p>
      <p>
        Because we love JS, you can also click on the header to stop / start the
        music ; )
      </p>
      <audio id="audioPlayer" controls >
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <PizzaMenu pizzas={pizzas} />
      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="pizza">Pizza</label>
          <input
            value={pizza}
            type="text"
            id="pizza"
            name="pizza"
            onChange={handlePizzaChange}
            required
          />
          <label htmlFor="description">Description</label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            onChange={handleDescriptionChange}
            required
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
      <DrinkMenu title="Notre Menu de Boissons">
      <DrinkCard
        title="Coca-Cola"
        image="https://media.istockphoto.com/id/1289738725/fr/photo/bouteille-en-plastique-de-coke-avec-la-conception-et-le-chapeau-rouges-d%C3%A9tiquette.jpg?s=1024x1024&w=is&k=20&c=HBWfROrGDTIgD6fuvTlUq6SrwWqIC35-gceDSJ8TTP8="
      >
        <p>Volume: 33cl</p>
        <p>Prix: 2,50 €</p>
      </DrinkCard>
      <DrinkCard
        title="Pepsi"
        image="https://media.istockphoto.com/id/185268840/fr/photo/bouteille-de-cola-sur-un-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=xdsxwb4bLjzuQbkT_XvVLyBZyW36GD97T1PCW0MZ4vg="
      >
        <p>Volume: 33cl</p>
        <p>Prix: 2,50 €</p>
      </DrinkCard>
      <DrinkCard
        title="Eau Minérale"
        image="https://media.istockphoto.com/id/1397515626/fr/photo/verre-deau-gazeuse-%C3%A0-boire-isol%C3%A9.jpg?s=1024x1024&w=is&k=20&c=iEjq6OL86Li4eDG5YGO59d1O3Ga1iMVc_Kj5oeIfAqk="
      >
        <p>Volume: 50cl</p>
        <p>Prix: 1,50 €</p>
      </DrinkCard>
</DrinkMenu>

    </main>
  );

  const nextPizzaId = (pizzas: Pizza[]) => {
    return pizzas.reduce((maxId, pizza) => Math.max(maxId, pizza.id), 0) + 1;
  };
  

}

  
      


  export default Main;