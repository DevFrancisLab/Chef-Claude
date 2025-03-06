import { useState } from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

     

     function submitted (formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
     }

     const [recipe, setRecipe] = useState("")

     async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
     }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={submitted}>
                <input 
                    type="text"
                    name="ingredient"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {
                ingredients.length > 3 ?
                <IngredientsList 
                ingredients = {ingredients}
                getRecipe={getRecipe}/>
                : null   
            }
            {
                recipe &&
                <ClaudeRecipe recipe={recipe}/>
            }
        </main>
    )
}