import RoundList from "../components/RoundList"
import Title from "../components/Title"
import CardList from "../components/card"
import  recipesData from '../recipesData.json';


const images = [
"https://img.freepik.com/free-photo/farfalle-pasta-with-meatballs-spinach-sauce-with-fried-chickpeas_2829-18269.jpg?size=626&ext=jpg",
"https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=626&ext=jpg",
"https://img.freepik.com/free-photo/delicious-healthy-oatmeal-with-figs-nuts-kiwi-seeds_2829-18240.jpg?size=626&ext=jpg",
"https://img.freepik.com/free-photo/salmon-fresh-herbs-copy-space_23-2148516936.jpg?size=626&ext=jpg",
"https://img.freepik.com/free-photo/two-delicious-sandwiches_144627-3690.jpg?size=626&ext=jpg",
"https://img.freepik.com/free-photo/top-close-up-view-pilaf-dried-fruits-rice-meat-bowl-wooden-spoon_140725-78655.jpg?size=626&ext=jpg"

];
const Recipes = () => {
  return (
    <div className="container">
      <Title color="danger">
        Favorites
      </Title>
      <RoundList images={images} />
      <hr />
      <Title color="warning">Recipes</Title>

      <CardList recipes={recipesData} />
      <hr />

    </div>
  )
}

export default Recipes