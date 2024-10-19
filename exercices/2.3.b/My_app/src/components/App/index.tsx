import Footer from "../Footer";
import Personne from "../Personne";
import PageTitle from "../Title";











const App = () => {
    const title = "Welcome to My App";
    const Personne1={
        name1 : "Alice",
        age1 : 25,
    };

    const Personne2={
        name2 : "Bob",
        age2 : 30,
    };
    const Personne3={
        name3 : "Charlie",
        age3 : 35,
    };

    
    
   
    const footerText = "© 2023 My App";
  
    return (
      <div>
       <PageTitle title={title} />
       <Personne name={Personne1.name1} age={Personne1.age1} />
       <Personne name={Personne2.name2} age={Personne2.age2} />
       <Personne name={Personne3.name3} age={Personne3.age3} />
       <Footer footer={footerText} />
      </div>
    );
  };
  
  export default App;
  