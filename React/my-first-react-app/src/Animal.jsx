import { recipes } from './data.js';

export default function RecipeList() {
    const recipeList = recipes.map((recipe) => (
        <li key={recipe.id}>
            <b>Recipe Name</b>
            <p>{recipe.name}</p>
            <b>Ingredients</b>
            <p>{recipe.ingredients}</p>
        </li>
    ));
    return (
        <div>
            <h1>Recipes</h1>
            <h2>
                <ul>{recipeList}</ul>
            </h2>
        </div>
    );
}
