import Button from "./Button";
import RightSide from "./RightSide";
interface Props {
  title: string;
}
const FullBox = ({ title }: Props) => {
  return (
    <div className="col-12">
      <div className="card shadow">
        <div className="card-body row">
        <h4 className="text-danger my-2">FOOD<span className="text-success">ME</span></h4>
          <p className="card-text col-6 my-3 p-3">
          Looking for inspiration in the kitchen? You've come to the right place! Our community-driven platform is packed with mouth-watering recipes, cooking tips, and culinary adventures waiting for you to explore.

🍽️ Dive into a world of flavors with our diverse collection of recipes, carefully crafted by home cooks and food enthusiasts just like you. From quick and easy weeknight dinners to decadent desserts that will satisfy your sweet tooth, there's something for everyone.

👩‍🍳 Feeling adventurous? Share your own creations with our vibrant community and discover new favorites along the way. Don't forget to rate and review recipes you've tried to help others find their next culinary masterpiece!

📚 Need some culinary inspiration? Check out our blog for informative articles, cooking hacks, and behind-the-scenes stories that will take your kitchen skills to the next level.
            {title}
          </p>
          <RightSide></RightSide>
          <div><Button>Login</Button></div>
   <div className="col-6">
   <input name="query" placeholder="Enter Name" className="rounded border-1 p-2 col-8" ></input>
    <Button>Submit</Button>
   </div>
        </div>
      </div>
    </div>
  );
};

export default FullBox;
