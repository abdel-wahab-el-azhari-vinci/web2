type MovieProps = {
  title: string;
  director: string;
};

type CinemaProps = {
  name: string;
  movie1: MovieProps;
  movie2: MovieProps;
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
        <tr>
          <td>{props.movie1.title}</td>
          <td>{props.movie1.director}</td>
        </tr>
        <tr>
          <td>{props.movie2.title}</td>
          <td>{props.movie2.director}</td>
        </tr>
      </table>
    </div>
  );
};

type PageTitleProps =  {
  title: string;
}

const PageTitle = (props: PageTitleProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const movie1: MovieProps = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2: MovieProps = {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };

  const cinema2Name = "UGC Toison d'Or";
  const movie3: MovieProps = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4: MovieProps = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movie1={movie1} movie2={movie2} />

      <Cinema name={cinema2Name} movie1={movie3} movie2={movie4} />
    </div>
  );
};

export default App;
