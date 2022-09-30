import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Recipe from './Components/Recipe/Recipe';

function App() {

  const APP_ID = "9f02b767";
  const APP_KEY = "7d7ce0c92119f8517f43c0f053c1a91e";

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setRecipes(data.hits))
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className='grid row'>
        {
          recipes.map(recipe => <Recipe recipe={recipe.recipe}></Recipe>)
        }
      </div>
    </div>
  );
}

export default App;
