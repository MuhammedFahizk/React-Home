// App.tsx
import NavBar from "./pages/nav"; // Adjust the path accordingly
import Home from "./pages/home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import React, { useState, useEffect } from "react";

function App() {
  const [section, setSection] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollThreshold1 = windowHeight * 0.8; // Switch to 'recipes' section when scrolled past 50% of the window height
    const scrollThreshold2 = windowHeight * 2.8; // Switch to 'section 2' when scrolled past 70% of the window height

    // Update section based on scroll position
    if (scrollPosition >= scrollThreshold1 && scrollPosition <= scrollThreshold2) {
      setSection(1); // Switch to section 2
    } else if (scrollPosition > scrollThreshold2) {
      setSection(2); // Switch to section 1 (Recipes)
    } else {
      setSection(0); // Default section (Home)
    }
    

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar section={section} />
      <Home/>
      <Recipes />
      <About/>
    </div>
  );
}

export default App;


