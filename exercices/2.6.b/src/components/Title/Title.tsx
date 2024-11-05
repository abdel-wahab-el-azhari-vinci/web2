import './Title.css';

interface TitleProps{
    title:string;
  }
  
  const Title = ({title}:TitleProps)=>{
    return(
     <div>
      <h1 className="title">{title}</h1>
     </div>
     
    );
  
  };

  export default Title;