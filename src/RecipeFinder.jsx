import { useState } from "react";
import SearchBar from "./SearchBar";

export default function RecipeFinder(){
     const [searchTerm, setSearchTerm] = useState("");
     const [recipes, setRecipes] = useState([]);
     const [selectedRecipe, setSelectedRecipe] = useState(null);

     const searchRecipes = async () => {
      if (!searchTerm.trim()) return; 
     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
     const data = await response.json();
     setRecipes(data.meals);
     };
 

    return(
        <div>
            <div>
               <h1>Search for a recipe!</h1>
               <p>This is a mini aplication where you can search for a recipe 🥘</p>
            </div>
            <SearchBar searchRecipes={searchRecipes} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
    )
}