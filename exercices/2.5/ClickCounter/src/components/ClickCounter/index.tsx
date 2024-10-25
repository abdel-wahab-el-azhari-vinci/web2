
import { useState } from "react";
import "../App/App.css";

interface ClickCounterProps {
    title: string;
    message: string;
  }
  
  const ClickCounter = ({ title, message }: ClickCounterProps) => {
    const [count, setCount] = useState(0);
    let valeur = false;
    if(count>=10){
      valeur=true;
    }
    return (
      <div>
        <h4>{title}</h4>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          
          </button>
          <p>{valeur ? `${message} `: "pas encore expert"}</p>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    );
  };
  export default ClickCounter;