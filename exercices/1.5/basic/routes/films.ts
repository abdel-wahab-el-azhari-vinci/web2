import express from "express";
import { Film, NewFilm } from "../types";

const router = express.Router();
const films: Film[] =[
    {
        "id": 1,
        "title": "Inception",
        "director": "Christopher Nolan",
        "duration": 148,
        "budget": 160,
        "description": "A mind-bending thriller about dream invasion.",
        "imageUrl": "https://example.com/inception.jpg"
      },
      {
        "id": 2,
        "title": "The Godfather",
        "director": "Francis Ford Coppola",
        "duration": 175,
        "budget": 6,
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "imageUrl": "https://example.com/godfather.jpg"
      },
      {
        "id": 3,
        "title": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "duration": 154,
        "budget": 8,
        "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "imageUrl": "https://example.com/pulpfiction.jpg"
      }
      
    
    
]



router.get('/',(req,res)=>{

  if(!req.query['minimum-duration']){
    res.json(films)
  }

  const minDuration= Number(req.query['minimum-duration']);

  if (minDuration <= 0){ 
    
   // res.json("Wrong minimum duration")
   res.sendStatus(400);
  
  };

  
  const filterFilms= films.filter((film)=>{
    return film.duration>=minDuration;
  })
  
    return res.json(filterFilms);
})

router.get("/:id",(req,res)=>{
  const id=Number(req.params.id);
   let exist =false;
  for (let index = 0; index < films.length; index++) {
    if(Number(films[index].id)==id){
         exist=true;
    }


}
if(exist){
  res.json(films[id-1])
}else{
  res.sendStatus(404);
}

});

router.post("/",(req,res)=>{
  const body: unknown = req.body;

  if (

    !body ||

    typeof body !== "object" ||

    !("title" in body) ||

    !("director" in body) ||

    !("duration" in body) ||

    !("budget" in body) ||
     
    !("description" in body)||
    
    !("imageUrl" in body)||

    typeof body.title !== "string" ||

    typeof body.director !== "string" ||

    typeof body.duration !== "number" ||

    typeof body.budget !== "number" ||
    typeof body.description !== "string" ||
    typeof body.imageUrl !== "string" ||


    !body.title.trim() ||

    !body.director.trim() ||
    
    body.duration <=0 ||

    body.budget <= 0 ||

    !body.description.trim() ||
    !body.imageUrl.trim()

  ) {

    return res.sendStatus(400);

  }
  const { title, director, duration, budget,description,imageUrl } = body as NewFilm;

  const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +1;


const newFilm: Film = {

  id: nextId,

  title,

  director,

  duration,

  budget,
  description,
  imageUrl,

};


films.push(newFilm);

return res.json(newFilm);


});




export default router;
