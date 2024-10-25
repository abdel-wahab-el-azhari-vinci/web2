import "./App.css";
import Header  from "../Header"; 
import Main from "../Main";
import Footer from "../Footer";



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
