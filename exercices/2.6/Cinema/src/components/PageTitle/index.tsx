type PageTitleProps =  {
    title: string;
  }
  
  const PageTitle = (props: PageTitleProps) => {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    );
  };

  export default PageTitle;