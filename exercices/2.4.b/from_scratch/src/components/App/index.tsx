import User from "../Utilisateur";


function App() {
  const user={nom:"Albert",age:25,isOnline:true};
  const userA={nom:"Albert",age:25,isOnline:false};
  const userB={nom:"Albert",age:25,isOnline:true};
  return(
    <div>
   <User nom={user.nom} age={user.age} isOnline={user.isOnline} />
   
   <User nom={userA.nom} age={userA.age} isOnline={userA.isOnline} />
   <User nom={userB.nom} age={userB.age} isOnline={userB.isOnline} />
   </div>

  );
}

export default App;
