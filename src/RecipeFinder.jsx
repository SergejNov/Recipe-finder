import { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeModal from "./RecipeModal";
import  "./RecipeFinder.css";
import  RecepieErrorModal from "./RecepieErrorModal";

export default function RecipeFinder(){
     const [searchTerm, setSearchTerm] = useState("");
     const [recipes, setRecipes] = useState([]);
     const [selectedRecipe, setSelectedRecipe] = useState(null);
     const [error, setError] = useState(false);

     const searchRecipes = async () => {
      if (!searchTerm.trim()) return; 
     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
     const data = await response.json()
      if (data.meals) {
    setRecipes(data.meals)
    setError(false)
    }else {
    setRecipes([])
    setError(true)
    }
     };
 

    return(
    <div className="app-card">
        <div className="main-card">
            <div className="search-card">
               <h1 className="srarch-h1">Search for a recipe!</h1>
               <p>This is a mini aplication where you can search for a recipe 🥘</p>
            <SearchBar searchRecipes={searchRecipes} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
           {error && (
             <RecepieErrorModal onClose={() => setError(false)} />
            )}
            <div className="recepie-list">
                {recipes && recipes.map(recipe => (
                 <div className="meal-card" key={recipe.idMeal} onClick={()=>{setSelectedRecipe(recipe)}}>
                    <h3 className="meal-name">{recipe.strMeal}</h3>
                    <img className="meal-img" src={recipe.strMealThumb} alt={recipe.strMeal} width="100" />
                </div>)
                )}
            </div>
            <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)}/>
        </div>
    </div>
    )
}