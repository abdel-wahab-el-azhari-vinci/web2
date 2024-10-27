import { useState } from "react";

type Movie = {
    title: string;
    director: string;
    description:string;
  };
  
  type CinemaProps = {
    name: string;
    movies: Movie[];
    
  };
  
  const Cinema = ({name,movies}: CinemaProps) => {
    const [isClick,setClick] = useState(false);
 
    return (
      <div>
        <h2>{name}</h2>
        <table>
          <tr>
            <th>Title</th>
            <th>Director</th>
          </tr>
          {movies.map((movie) => (
            <tr>
              <td onClick={()=>setClick((true))} onMouseLeave={()=>setClick((false))}>{movie.title} </td>
              <td>{movie.director}</td>
              <td >
              {isClick ?`${movie.description} `: null}
              </td>
            </tr>
          ))}
          
        </table>
       
      </div>
    );
  };
  
  export default Cinema;