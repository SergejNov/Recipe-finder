import "./RecipeModal.css";

export default function RecipeModal({recipe, onClose}){
    if (!recipe) return null;


    return <div className="modal-overlay" onClick={onClose}>
     <div className="modal-card" onClick={e => e.stopPropagation()}>
       <h2>{recipe.strMeal}</h2>
       <img src={recipe.strMealThumb} alt={recipe.strMeal} />
       <p>{recipe.strInstructions}</p>
     <button onClick={onClose}>Close</button>
    </div>
   </div>
}