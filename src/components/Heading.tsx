import Paragraph from "./paragraph";
import Button from "./Button";
const Heading = () => {
  return (
    <div className="py-5 col-6 ps-5">
      <Paragraph>
  {["Cooking is like love ....", "Food brings people together on many different levels...", "Food is my love language"]}
</Paragraph>


      <h1 className="mt-0 fs-1 ">
        Flavors That Speak Louder. <br /> Than{" "}
        <span className="text-danger">Words!</span>
      </h1>
      <Paragraph>
        This magical, marvelous food on our plate, this sustenance we absorb, has a story to tell. It has a journey. It leaves a footprint. It leaves a legacy...
        </Paragraph>
      <Button>Explore More</Button>
    </div>
  );
};

export default Heading;
