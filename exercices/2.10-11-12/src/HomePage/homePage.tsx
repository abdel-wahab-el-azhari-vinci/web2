
import "./homePage.css";

const HomePage=()=>{

    return(

       <div>
         <header className="header">
            <h2>New Movie Streaming </h2>
         </header>

         <main className="image-container">
            <img src="https://s.tmimgcdn.com/scr/400x250/238800/offbeat-theme-wordpress-polyvalent-pour-agence-de-creation-d39entreprise-et-commerce-electronique_238874-original.jpg" alt="image" />
         </main>

         <footer className="footer">
           <p>That's my website</p>
         </footer>
       </div>

    );
}

export default HomePage;