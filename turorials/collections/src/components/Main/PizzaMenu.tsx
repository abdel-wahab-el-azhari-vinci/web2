
import "./PizzaMenu.css";
import { Pizza } from "../../type";

interface PizzaProps{
  pizzas:Pizza[];
};


  
  const PizzaMenu = ({pizzas }: PizzaProps) => {
    return (
      <table className="pizza-menu">
        <thead>
          <tr>
            <th>Pizza</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr key={pizza.id}>
              <td>{pizza.title}</td>
              <td>{pizza.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default PizzaMenu;
  