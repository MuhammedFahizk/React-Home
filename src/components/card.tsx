import Button from "./Button";
import Paragraph from "./paragraph";

interface Props {
    recipes: { Name: string; url: string; Author: string }[]; 
}
const CardList = ({recipes} : Props) => {
    return (
        <div className="d-flex justify-content-start col-12 row my-5">
        {recipes.map((item, index) => ( // Added return statement here
            <CardItem key={index} name={item.Name} url={item.url} author={item.Author} />
        ))}
    </div>
    );
  };
  interface prop {
    name: string,
    author: string,
    url: string,
  }
  const CardItem = ({name, author, url }: prop) => {
    return (
      <div className="col-3  p-3  ">
       <div className="border  rounded col-12">
       <img
        className="img-fluid rounded"
          src={url}
          alt=""
        />
        <div className="p-2">
          <h4 className="text-danger">{name}</h4>
          <Paragraph>
            {author}
          </Paragraph>
          <Button>Explore</Button>
        </div>
       </div>
      </div>
    );
  };

  export default CardList;