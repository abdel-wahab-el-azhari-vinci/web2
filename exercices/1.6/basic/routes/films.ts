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


router.delete("/:id",(req,res)=>{

  const id= Number(req.params.id);
  const index=films.findIndex((film)=>film.id===id);

  if(index==-1){
    return res.sendStatus(404);
  }
  const filmDeletes=films.splice(index,1);
  return res.json(filmDeletes[0]);


})


router.patch("/:id",(req,res)=>{
const id= Number(req.params.id);
const film=films.find((film)=>film.id===id);
if(!film){
  return res.sendStatus(404);
}

const body : unknown = req.body;

if (
  !body ||
  typeof body !== "object" ||
  ("title" in body &&
    (typeof body.title !== "string" || !body.title.trim())) ||
  ("director" in body &&
    (typeof body.director !== "string" || !body.director.trim())) ||
  ("duration" in body &&
    (typeof body.duration !== "number" || body.duration <= 0)) ||
  ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0))||
  ("description" in body &&
    (typeof body.description !== "string" || !body.description.trim())) ||
  ("imageUrl" in body &&
    (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
) {
  return res.sendStatus(400);
}



const { title,director,duration,budget,description,imageUrl }: Partial<NewFilm> = body;

if(title){
  film.title=title;
}

if(director){
  film.director=director;
}
for(const filme of films){
  if(filme.title==film.title &&filme.director==film.director){
    return res.sendStatus(409);
  }
}
if(duration){
  if(duration<0){
    return res.sendStatus(400);
  }
  film.duration=duration;
}

if(budget){
  if(budget<0){
    return res.sendStatus(400);
  }
  film.budget=budget;
}

if(description){
  film.description=description;
}
if(imageUrl){
  film.imageUrl=imageUrl;
}

return res.json(film);





})


router.put("/:id",(req,res)=>{

  const id=Number(req.params.id);
  if(isNaN(id)){
    return res.json("L'id n'est pas un nombre!")
  }
  if(id<1 ){
    return res.json("id inexistant !");
  }
  const body : unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0))||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }
  const film=films.find((film)=>film.id===id);

  if(film){
    const {title, director, duration} = body as NewFilm;
     
    film.title=title;
    film.director=director;
    film.duration=duration;
    
    return res.json(film);
  }
  
   const{title,director,duration} = body as NewFilm
   const nextId= id;
   const createFilm={id:nextId,title:title,director:director,duration:duration};
   for (const filme of films) {
    if(filme.title==createFilm.title && filme.director==createFilm.director)
        return res.status(400).json("Ce livre existe déja !");
   }

   films.push(createFilm);
   return res.json(createFilm);
   
   


})




export default router;
