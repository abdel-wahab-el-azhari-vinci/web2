type PersonneProps = {
    name:string;
    age:number;
};

const Personne =(props:PersonneProps)=>{

    return (
      <div>
        <h2>{props.name}</h2>
        <p> Age: {props.age}</p>
      </div>
    )
};

export default Personne;