import { useState } from "react";
import "./ColorBox.css";

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];



const ColorBox = () => {

  const [currentColor,setColor]=useState(colors[0]);


  const nextColor  =(currentColor:string)=>{

     let color :string = 'color';
      
     let index=0;
     
    for ( index; index < colors.length; index++) {
      
         if(colors[index]==currentColor){
         
          if(index+1>color.length-1){
            index = 0;
            color=colors[index];
            return color;
          }
          color=colors[index+1];
          return color;
         }
      
    }
    return color;

  }

  const newColor  = nextColor(currentColor);
  const NewColor = newColor as string;
  
  const oldColor = (color : string)=>{

    let old = 'color';
  
    for (let i = 0; i < colors.length; i++) {
       
          if(colors[i]==color){
            if(i-1<0){
              i = colors.length-1;
              old=colors[i];
              return old;
            }

             old = colors[i-1];
             return old;
          }
    }

  }

  const oldCurrentColor  = oldColor(NewColor);
  const OldCurrentColor = oldCurrentColor as string;
  console.log(OldCurrentColor);
  console.log(NewColor);

  return (
    
    
   <div className="encadre" style={{backgroundColor : `${OldCurrentColor}`}}>

    <button  onClick={()=>setColor(NewColor)}  className="button">{NewColor}</button>

   </div>
    
  );
};

export default ColorBox;