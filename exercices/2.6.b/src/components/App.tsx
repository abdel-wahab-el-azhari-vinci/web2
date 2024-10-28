
import './App.css';
import ColorBox from './ColorBox/ColorBox';

/*
interface Colors{
  colors:string[];
};

const Color = ({colors}:Colors)=>{
    const [color,setColor] = useState('red')
  colors.push('red','green','blue','yellow','purple');
  let i = 0;
   

 
    <div  onChange={()=>setColor((color)=> while (i<colors.length) {
       
         color=colors[i+1];
           if(i==colors.length-1){
             i==0;
          }
          i++;
      
    }) } >
   <h4>La phrase qui change de couleurs</h4>
   <button>{color}</button>
   </div>
     
   


}
   */



const App = () => (
  <>
    <ColorBox />
    <ColorBox />
    <ColorBox />
  </>
);

export default App;