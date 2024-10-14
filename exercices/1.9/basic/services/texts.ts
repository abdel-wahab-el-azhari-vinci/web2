import path from "node:path";
import { parse, serialize, /*serialize*/ } from "../utils/json";
import {  NewTexte, Text, } from "../types";

const jsonDbPath = path.join(__dirname, "/../data/films.json");



const typingTexts :Text[] = [
    {
      "id": "967979ee-4c4b-4f93-920b-115976fa4abb",
      "content": "Hello, world!",
      "level": "easy"
    },
    {
      "id": "98c72e0e-db05-442a-b035-061f56f7e7f8",
      "content": "This is a text.",
      "level": "medium"
    },
    {
      "id": "45a3397c-d9bd-440b-8099-4346a38d1428",
      "content": "This is a longer text.",
      "level": "hard"
    }
  ];



function readAll() : Text[] |string {
  const textes= parse(jsonDbPath,typingTexts);
   const errorMessage = "il ne y'a pas textes ";
  if(!textes){
    return errorMessage;
   
  }
  const textTable :Text[]=[];
   for (const text of textes){
       textTable.push(text);
   }
  
    return textTable;
}


function readLevel(level:string) :Text[] |string {
    const textes = parse(jsonDbPath,typingTexts);
    const erroMessage ="Il ne y'a pas de texte contenant ce level : "+level;
    const tableLevel= [];
    for(const texte of textes){
        if(texte.level == level){
            tableLevel.push(texte);
        }
    }
    if(tableLevel.length==0){
        return erroMessage;
    }
    
    return tableLevel;
}


function readOneTexte(id:string) :Text |string {
  const textes=parse(jsonDbPath,typingTexts);
  let text : Text= {id:"0004",content:"lsjqfq",level:"easy"};
  const erroMessage= "Cette id n'existe pas ! ";
  let find= false;
  for (const texte of textes ) {
    if(texte.id==id){
      text=texte;
      find=true;
    }
    
  }
  if(!find){
    return erroMessage;
  }


  return text;
    
}

function generateUUID(): string {
  return crypto.randomUUID();
}





function createOneTexte(content:string,level:string) :NewTexte |string {

  const textes=parse(jsonDbPath,typingTexts);
  
  const erMessage = "LE level doit faire partie de c'est 3 proposition : hard,easy,medium";
  
  if(level!="easy"&&level!="hard"&&level!="medium"){
    return erMessage;
  }
  const text : NewTexte={content:content,level:level};
   const nexid= generateUUID();
   for (const texte of textes) {
    if(texte.id==nexid){
      return "l'id existe déja ! ";
    }
   }

  const createText={
     
  id: nexid,
  ...text

  };

   textes.push(createText);

  serialize(jsonDbPath,typingTexts);
   

   return createText;
  
}


function deleteOneTexte(id:string):Text|undefined {
 const textes=parse(jsonDbPath,typingTexts);
  

  const index = textes.findIndex((texte)=>texte.id===id);
  const deletedElement=textes.splice(index,1);
  if(index===-1){
    return undefined;
}

 serialize(jsonDbPath,typingTexts);
 return deletedElement[0];
 
     
}


function updateOneTexte(id:string,content:string,level:string): Text|undefined|string {
  const textes=parse(jsonDbPath,typingTexts);
  const index=textes.findIndex((texte)=>texte.id==id);
  const erMessage="les seules level accepter : hard,medium,easy";
  if(index==-1){
    return undefined;
  }
  if(level!="easy"&&level!="hard"&&level!="medium"){
    return erMessage;
  }

  const update=textes[index];
  update.content=content;
  update.level=level;
  textes[index]=update;
  serialize(jsonDbPath,typingTexts);
  return update;
  
}






export{
    readAll,
    readLevel,
    readOneTexte,
    createOneTexte,
    deleteOneTexte,
    updateOneTexte,
    
};



