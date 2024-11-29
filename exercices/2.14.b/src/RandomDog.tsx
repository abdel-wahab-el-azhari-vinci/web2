import { useEffect, useState } from "react";

interface Dog {
  message: string;
  status: string;
}

const RandomDog = () => {
  const [dog, setDog] = useState<Dog | undefined>(undefined);

  const fetchDogImage = async () => {

     try {
      const reponse = await fetch("https://dog.ceo/api/breeds/image/random")
      if(!reponse.ok) throw new Error(`fetch error : ${reponse.status} : ${reponse.statusText}`);
      const data = await reponse.json();
        setDog({
          message: data.message ?? "No dog found",
          status: data.status ?? "Error",
        });
     
     } catch (error) {
      console.error("RandomDog::error: ", error); 
      
     
   
  }
};

  useEffect(() => {
    fetchDogImage();
  }, []);

  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Random dog</h3>
      <img src={dog.message} alt="Random dog" style={{ maxHeight: 300 }} />
    </div>
  );
};

export default RandomDog;
