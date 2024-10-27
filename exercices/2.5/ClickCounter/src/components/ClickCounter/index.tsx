
import { useState } from "react";
import "../App/App.css";

interface ClickCounterProps {
    title: string;
    message: string;
    click : string;
  }
  
  const ClickCounter = ({ title, message,click }: ClickCounterProps) => {
    const [count, setCount] = useState(0);
    const [isClick ,setClick] = useState(false);
    let valeur = false;
    if(count>=10){
      valeur=true;
      
    }
    return (
      <div>
        <h4>{title}</h4>
        <div className="card">
          
          <button onClick={() => setCount((count) => count + 1)} onMouseEnter={()=>setClick((true))} onMouseLeave={()=>setClick((false))} >
          
          <p>{isClick ? `${click} `: null}</p>
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