
interface FooterProps{
    logo:string;
    children:React.ReactNode;
}


const Footer = (props:FooterProps)=>{
return(
    <footer>
        <img src={props.logo} alt="logo" />
        <div>
            {props.children};
        </div>
    </footer>
    );


}

export default Footer;