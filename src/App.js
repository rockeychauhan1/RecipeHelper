import Axios from "axios";
import { useState } from "react";
import "./app.css";
import RecipeTile from "./components/index";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  // const [healthLabel,sethealthLabel]=useState("vegan")

  const YOUR_APP_ID = `49e56ab3`;
  const YOUR_APP_KEY = "75d4bdc82f836bc2fd002b65b8118922";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  // const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 >Food Recipe Treasure </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="Enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>
       
       <div className="app__recipes">
         {recipes.map((recipe)=>{
           return <RecipeTile recipe={recipe} />
         })}
       </div>
    </div>
  );
}

export default App;
