

import express from "express";
import { createOneTexte,updateOneTexte,deleteOneTexte, readAll,readLevel,readOneTexte } from "../services/texts";
import { NewTexte } from "../types";


const router = express.Router();


router.get("/",(_req,res)=>{

    const textes=readAll();
    res.json(textes);

});


router.get("/",(req,res)=>{

    const level=req.query["level"];
    const erroMessage= "Il ne y'a pas de parametre";
     if(level==undefined || typeof(level)!="string"){
        return erroMessage;
     }

     const tableTexteLevel=readLevel(level);
     return res.json(tableTexteLevel);


});


router.get("/:id",(req,res)=>{

    const id=req.params.id;
    const erroMessage="cette id n'est pas un string !";
    if(typeof(id)!="string"){
        return erroMessage;
    }
    const texte=readOneTexte(id);
    return res.json(texte);


});


router.post("/",(req,res)=>{
   const body : unknown= req.body;

   if(!body||typeof body !== "object" ||!("content"in body)|| !("level"in body)||typeof body.content!="string"||typeof body.level!="string"||
   !body.content.trim() || !body.level.trim()){
    return res.status(400);
   }

   const {content,level} = body as NewTexte;

   const texte ={content:content,level:level};
   const newTexte=createOneTexte(texte.content,texte.level);
   return res.json(newTexte);
   


});

router.delete("/:id",(req,res)=>{
const id=req.params.id;
const erroMessage="cette id n'est pas un string !";
if(typeof(id)!="string"){
    return erroMessage;
}
 const deleteTexte=deleteOneTexte(id);
 return res.json(deleteTexte);


});

router.put("/:id",(req,res)=>{

const id=req.params.id;
const body: unknown=req.body;
if(!body||typeof body !== "object" ||!("content"in body)|| !("level"in body)||typeof body.content!="string"||typeof body.level!="string"||
   !body.content.trim() || !body.level.trim()){
    return res.status(400);
}

const {content,level}:Partial<NewTexte>= body as NewTexte;

const newTexte={id:id,content:content,level:level};
const texte=updateOneTexte(id,newTexte.content,newTexte.level);
return res.json(texte);




});









export default router;