
import { useState } from "react";
import "../App/App.css";

/* c'est le clickCounter */
  
  const ClickCounter = () => {
    const [count, setCount] = useState(0);
    
    return (
      <div>
       
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          
          </button>
         
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    );
  };
  export default ClickCounter;