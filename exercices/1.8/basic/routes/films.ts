import express from "express";
import {  NewFilm } from "../types";


import{
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOneFilm,
  updateOneFilm,
  exist,
} from "../services/films";


const router = express.Router();


router.get("/", (req, res) => {
  

  

  const minDuration = Number(req.query["minimum-duration"]);

  if (minDuration <= 0) {
    // res.json("Wrong minimum duration")
    res.sendStatus(400);
  }
  const film=readAllFilms(minDuration);

 
  return res.json(film);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  
  
  const film=readOneFilm(id);
  if(!film){
    res.status(404);
  }else{
    res.json(film);
  }
});


router.post("/", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    !("budget" in body) ||
    !("description" in body) ||
    !("imageUrl" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    typeof body.budget !== "number" ||
    typeof body.description !== "string" ||
    typeof body.imageUrl !== "string" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    body.budget <= 0 ||
    !body.description.trim() ||
    !body.imageUrl.trim()
  ) {
    return res.sendStatus(400);
  }
  const { title, director, duration, budget, description, imageUrl } =
    body as NewFilm;
    const film= {title:title,director:director,duration:duration,budget:budget,description:description,imageUrl:imageUrl};
  const newFilm=createOneFilm(film)
  

  

  return res.json(newFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film=deleteOneFilm(id);
  return res.json(film);
});



router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const {
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  }: Partial<NewFilm> = body;
  const newFilm={title:title,director:director,duration:duration,budget:budget,description:description,imageUrl:imageUrl};

  const filme=updateOneFilm(id,newFilm);
  console.log(JSON.stringify(newFilm));
  console.log(JSON.stringify(filme));
  return res.json(filme);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  
  if (isNaN(id)) {
    return res.json("L'id n'est pas un nombre!");
  }
  if (id < 1) {
    return res.json("id inexistant !");
  }
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }
  

  if (exist(id)) {
    const { title, director, duration } = body as NewFilm;

    const updateFilme={title:title,director:director,duration:duration};
    const filmeAjour=updateOneFilm(id,updateFilme);
    return res.json(filmeAjour);
  }

  const { title, director, duration } = body as NewFilm;
  
  const filme= {title:title,director:director,duration:duration};
  const newFilm=createOneFilm(filme)
  

  

  return res.json(newFilm);
});

export default router;
