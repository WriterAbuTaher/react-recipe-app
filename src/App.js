import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Recipe from './Components/Recipe/Recipe';

function App() {


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APP_ID = "9f02b767";
  const APP_KEY = "7d7ce0c92119f8517f43c0f053c1a91e";

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setRecipes(data.hits))
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }

  return (
    <div>
      <Navbar search={search} onChange={updateSearch} onSubmit={getSearch}></Navbar>
      <div className='container grid row mx-auto my-5'>
        {
          recipes.map(recipe => <Recipe recipe={recipe.recipe} key={recipe.recipe.label}></Recipe>)
        }
      </div>
    </div>
  );
}

export default App;
