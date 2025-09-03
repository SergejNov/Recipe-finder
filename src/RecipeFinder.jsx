import { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeModal from "./RecipeModal";
import  "./RecipeFinder.css";

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
        <div className="main-card">
            <div>
               <h1>Search for a recipe!</h1>
               <p>This is a mini aplication where you can search for a recipe 🥘</p>
            </div>
            <SearchBar searchRecipes={searchRecipes} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className="recepie-list">
                {recipes && recipes.map(recipe => (
                 <div key={recipe.idMeal} onClick={()=>{setSelectedRecipe(recipe)}}>
                    <h3>{recipe.strMeal}</h3>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} width="100" />
                </div>)
                )}
            </div>
            <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)}/>
        </div>
    )
}