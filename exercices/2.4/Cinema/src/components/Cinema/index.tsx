type Movie = {
    title: string;
    director: string;
  };
  
  type CinemaProps = {
    name: string;
    movies: Movie[];
    
  };
  
  const Cinema = (props: CinemaProps) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <table>
          <tr>
            <th>Title</th>
            <th>Director</th>
          </tr>
          {props.movies.map((movie) => (
            <tr>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
            </tr>
          ))}
          
        </table>
      </div>
    );
  };
  
  export default Cinema;