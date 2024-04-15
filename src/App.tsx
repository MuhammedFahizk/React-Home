// App.tsx
import NavBar from "./pages/nav"; // Adjust the path accordingly
import Home from "./pages/home";
import Recipes from "./pages/Recipes";
function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <Recipes />
    </div>
  );
}

export default App;
