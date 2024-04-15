interface Props {
    children: string;
    color: string;
  }
  
  const Title = ({ children, color }: Props) => {
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <h1 className={`text-center text-${color}`}>{children}</h1>
        </div>
      </div>
    );
  };
  
  export default Title;
  