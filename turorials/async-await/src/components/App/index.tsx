import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "../Footer";
import Header from "../Header";
import { Drink, NewPizza, Pizza, PizzeriaContext } from "../../types";
import NavBar from "../Navbar";

const defaultPizzas: Pizza[] = [
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

const drinks: Drink[] = [
  {
    title: "Coca-Cola",
    image:
      "https://media.istockphoto.com/id/1289738725/fr/photo/bouteille-en-plastique-de-coke-avec-la-conception-et-le-chapeau-rouges-d%C3%A9tiquette.jpg?s=1024x1024&w=is&k=20&c=HBWfROrGDTIgD6fuvTlUq6SrwWqIC35-gceDSJ8TTP8=",
    volume: "Volume: 33cl",
    price: "2,50 €",
  },
  {
    title: "Pepsi",
    image:
      "https://media.istockphoto.com/id/185268840/fr/photo/bouteille-de-cola-sur-un-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=xdsxwb4bLjzuQbkT_XvVLyBZyW36GD97T1PCW0MZ4vg=",
    volume: "Volume: 33cl",
    price: "2,50 €",
  },
  {
    title: "Eau Minérale",
    image:
      "https://media.istockphoto.com/id/1397515626/fr/photo/verre-deau-gazeuse-%C3%A0-boire-isol%C3%A9.jpg?s=1024x1024&w=is&k=20&c=iEjq6OL86Li4eDG5YGO59d1O3Ga1iMVc_Kj5oeIfAqk=",
    volume: "Volume: 50cl",
    price: "1,50 €",
  },
];

const App = () => {
 
  const [actionToBePerformed, setActionToBePerformed] = useState(false);

  const [pizzas, setPizzas] = useState<Pizza[]>([]);



  useEffect(() => {

    fetch("http://localhost:3000/pizzas")

      .then((response) => {

        if (!response.ok)

          throw new Error(

            `fetch error : ${response.status} : ${response.statusText}`

          );

        return response.json();

      })

      .then((pizzas) => setPizzas(pizzas))

      .catch((err) => {

        console.error("HomePage::error: ", err);

      });

  }, []);

  const addPizza = async (newPizza: NewPizza) => {
    const pizzaAdded = { ...newPizza, id: nextPizzaId(pizzas) };
    try {

      const options = {

        method: "POST",

        body: JSON.stringify(newPizza),

        headers: {

          "Content-Type": "application/json",

        },

      };


      const response = await fetch("http://localhost:3000/pizzas", options); // fetch retourne une "promise" => on attend la réponse


      if (!response.ok)

        throw new Error(

          `fetch error : ${response.status} : ${response.statusText}`

        );


      const createdPizza = await response.json(); // json() retourne une "promise" => on attend les données


      setPizzas([...pizzas, createdPizza]);

    } catch (err) {

      console.error("AddPizzaPage::error: ", err);

    }

  
  };

  const handleHeaderClick = () => {
    setActionToBePerformed(true);
  };

  const clearActionToBePerformed = () => {
    setActionToBePerformed(false);
  };

  const fullPizzaContext: PizzeriaContext = {
    addPizza,
    pizzas,
    setPizzas,
    actionToBePerformed,
    setActionToBePerformed,
    clearActionToBePerformed,
    drinks,
  };

  return (
    <div className="page">
      <Header
        title="We love Pizza"
        version={0 + 1}
        handleHeaderClick={handleHeaderClick}
      />
      <main>
        <NavBar />
        <Outlet context={fullPizzaContext} />
      </main>
      <Footer />
    </div>
  );
};

const nextPizzaId = (pizzas: Pizza[]) => {
  const ids = pizzas.map((pizza) => pizza.id);
  return Math.max(...ids) + 1;
};

export default App;
