// Create the pizzas service based on the drinks.ts service

import path from "node:path";

import { Film, NewFilm } from "../types";

import { parse, serialize } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[]=[
    {"id":1,
        "title":"Inception",
        "director":"Christopher Nolan",
        "duration":148,
        "budget":160,
        "description":"A mind-bending thriller about dream invasion.",
        "imageUrl":"https://example.com/inception.jpg"},
        {"id":2,
            "title":"The Godfather",
            "director":"Francis Ford Coppola",
            "duration":175,
            "budget":6,
            "description":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            "imageUrl":"https://example.com/godfather.jpg"},
            {"id":3,
            "title":"Pulp Fiction",
            "director":"Quentin Tarantino",
            "duration":154,
            "budget":8,
            "description":"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "imageUrl":"https://example.com/pulpfiction.jpg"},
            {"id":4,
            "title":"NewFilm",
            "director":"abdel",
            "duration":180,
            "budget":5,
            "description":"that's a new Film !",
            "imageUrl":"https://example.com/godfather.jpg"},
            {"id":5,
            "title":"NewFilm",
            "director":"abdel",
            "duration":180,
            "budget":5,
            "description":"that's a new Film !",
            "imageUrl":"https://example.com/godfather.jpg"
        }];


        //read all films

        function readAllFilms(minDuration:number): Film[] {
            const films = parse(jsonDbPath, defaultFilms);
            if(!minDuration){
                return films;
            }
            
            const durationMinFilm = Number(minDuration);
            const filteredFilm = films.filter((film)=>{
                return film.duration>=durationMinFilm;
            });
                return filteredFilm;
            
        }



        //reade one films

        function readOneFilm(id:number) : Film | undefined {
            const films = parse(jsonDbPath, defaultFilms);
            const film = films.find((film)=> film.id ===id);
            if (!film) {
                return undefined;
            }
            return film;
        }


        //create one films

        function createOneFilm(newFilm :NewFilm): Film |string {
            const films = parse(jsonDbPath, defaultFilms);
            const nextId = 
            films.reduce((maxId,film)=>(film.id>maxId ? film.id : maxId), 0) + 1 ;
            
           const message="Le filme existe déja !";
            
            const createFilm = {
                id : nextId,
                ...newFilm,
            };

            for (const filme of films) {
                if (filme.title == createFilm.title &&filme.director == createFilm.director){
                  return message ;
                }
            }
            
            
            
            films.push(createFilm);
            serialize(jsonDbPath,films);
            return createFilm;
        }

        //delete one film
        function deleteOneFilm(filmId:number):Film |undefined {
            const films = parse(jsonDbPath, defaultFilms);
            const index = films.findIndex((film)=>film.id===filmId);
           
            if(index===-1){
                return undefined;
            }
           
            const deletedElement=films.splice(index,1);
            serialize(jsonDbPath,films);
            console.log(JSON.stringify(deletedElement[0]));
            return deletedElement[0];
        }

        function updateOneFilm(filmId : number,newFilm:Partial<Film>) : Film | undefined{
            const films = parse(jsonDbPath, defaultFilms);
            const film = films.find((film)=>film.id===filmId);
            if(!film){
                return undefined;
            }

            if(newFilm.title!==undefined){
               film.title=newFilm.title! ;
            }
            for (const filme of films) {
                if (filme.title == film.title && filme.director == film.director) {
                  return undefined;
                }
              }
            if(newFilm.description!==undefined){
                film.description=newFilm.description! ;
            }
            if(newFilm.director!==undefined){
                film.director=newFilm.director!;
            }
            if(newFilm.duration!==undefined){
                film.duration=newFilm.duration!;
            }
            if(newFilm.imageUrl!==undefined){
                film.imageUrl=newFilm.imageUrl!;
            }
            if(newFilm.budget!==undefined){
                film.budget=newFilm.budget!;
            }
            serialize(jsonDbPath,films);
            return film;

        }
        function exist(id:number):boolean{
            const films=parse(jsonDbPath,defaultFilms);
            const filme= films[id-1];
            if(filme){
                return true;
            }
            return false;
        }

        export {
            readAllFilms,
            readOneFilm,
            createOneFilm,
            deleteOneFilm,
            updateOneFilm,
            exist,
        };



