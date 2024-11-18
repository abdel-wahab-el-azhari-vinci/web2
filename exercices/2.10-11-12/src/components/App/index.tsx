
import './App.css'

import {  Outlet, useNavigate } from "react-router-dom";


const NavBar = ()=>{

    const navigate = useNavigate();

    return(

      <nav className='nav'>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/cinemaPage")}>Cinema Page</button>
        <button onClick={()=>navigate("/movieListePage")}>Movie List Page</button>
      </nav>
    );

}

function App() {
  

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
