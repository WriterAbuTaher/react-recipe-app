import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const APP_ID = "9f02b767";
  const APP_KEY = "7d7ce0c92119f8517f43c0f053c1a91e";

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
