
import './User.css';

interface UsersPorps{
    nom:string;
    age:number;
    isOnline:boolean;
}


const User = (props:UsersPorps)=>{

    return (
     <div>
        <h2>Nom : {props.nom}</h2>
        <p>Age : {props.age}</p>
        <div className={props.isOnline ? "online" : "offline"}>
       {props.isOnline ? "En ligne" : "Hors ligne"}
</div>
      
     </div>
    );

}

export default User;