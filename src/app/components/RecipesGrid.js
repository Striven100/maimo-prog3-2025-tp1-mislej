import RecipeCard from "@/app/components/RecipeCard"
import parsedData from "@/data/recipes"

const RecipesGrid = () => {

  return (
    <div className="recipes_grid">
      {parsedData.recipes.map((recipes) => (
        <RecipeCard key={recipes.id} name={recipes.name} image={recipes.image} id={recipes.id}/>
        
      ))}
    </div>
  )
}

export default RecipesGrid