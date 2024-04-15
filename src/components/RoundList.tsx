

interface Props {
  images: string[]; // Define the type of the images prop
}
const RoundList = ({ images }: Props) => {
  return (
    <div className="container d-flex col-12 justify-content-center my-5">
      {images.map((image, index) => (
        <RoundCard key={index} image={image} />
      ))}
    </div>
  );
};

interface RoundCardProps {
  image: string; // Define the type of the images prop
}

const RoundCard: React.FC<RoundCardProps> = ({ image }) => {
  return (
    <div
      className="rounded-circle border border-dark p-1 m-2 "
      style={{ maxWidth: "150px", height: "150px" }}
    >
      <img
        src={image}
        alt="Card"
        className="rounded-circle img-fluid"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>
  );
};


export default RoundList ;
