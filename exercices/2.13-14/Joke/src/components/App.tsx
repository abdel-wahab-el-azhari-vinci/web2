import { useEffect, useState } from "react";
import "./App/App.css";

interface Joke {
  category: string;
  joke: string;
}

function App() {
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data: Joke) => {
        const timer = setTimeout(() => {

          setJokes([data]);;
    
        }, 10000);
    
    
    
        return () => clearTimeout(timer);
       
      })
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  return (
    <div>
      <h2>The joke</h2>
      {jokes.map((joke) => (
        <div>
          <p>The joke : {joke.joke}</p>
          <p>The category : {joke.category}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
