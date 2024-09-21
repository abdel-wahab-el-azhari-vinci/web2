interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}
interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}




type NewPizza = Omit<Pizza, "id">;
export type { Pizza, NewPizza, PizzaToUpdate, Drink };


