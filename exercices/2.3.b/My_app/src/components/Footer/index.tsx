type FooterProps={
    footer:string;
  };
  
  const Footer = (props:FooterProps)=>{
      return(
       <footer>{props.footer}</footer>
      )
  }
;

export default Footer;