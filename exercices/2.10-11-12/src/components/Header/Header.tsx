import "./Header.css";
interface HeadProps{
    logo:string;
    children:React.ReactNode;
}


const Header = (props:HeadProps)=>{
return(
    <header>
        <img className="image-container" src={props.logo} alt="logo" />
        <div>
            {props.children};
        </div>
    </header>
    );


}

export default Header;