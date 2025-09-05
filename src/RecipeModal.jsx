import "./RecipeModal.css";

export default function RecipeModal({recipe, onClose}){
    if (!recipe) return null;


    return <div className="modal-overlay" onClick={onClose}>
     <div className="modal-card" onClick={e => e.stopPropagation()}>
       <h2 className="modal-h2">{recipe.strMeal}</h2>
       <img className="modal-img" src={recipe.strMealThumb} alt={recipe.strMeal} />
       <p className="modal-instructions">{recipe.strInstructions}</p>
     <button className="modal-close" onClick={onClose}>Close</button>
    </div>
   </div>
}