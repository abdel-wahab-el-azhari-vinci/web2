import express from "express";
import { Film } from "../types";

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

let num=0;

router.get('/',(_req,res)=>{
   
    num++;
    console.log(" GET counter : "+num);
    
    return res.json(films);
})




export default router;
