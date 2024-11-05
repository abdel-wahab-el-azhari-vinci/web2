import "./App.css";
import Header  from "../Header"; 

import Footer from "../Footer";
import Main from "../Main";



// Reste du code

function App() {
  return (
    <div className="page">
      <Header title="We love Pizza" version={0+1} />
      <Main />
      <Footer />
    </div>
  );
}




export default App;
