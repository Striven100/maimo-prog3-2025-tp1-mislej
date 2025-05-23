'use client'

import {useState, useEffect} from 'react'
import RecipeCard from "@/app/components/RecipeCard"
import parsedData from "@/data/recipes"
import axios from 'axios'

const RecipesGrid = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    const getData = async () => {
      setLoading(true)
      try {
      const response = await axios.get('https://dummyjson.com/recipes')
      const responseData = response.data.recipes
      setData(responseData)
      setLoading(false)
      } catch (error) {
        console.log('MI ERROR', error);
        setError(true)
      };
    }

    getData()
  }, [])

  return (
    <div className="recipes_grid">
      {!loading &&
      data.map((recipe) => (
        <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} id={recipe.id} />
      ))}
      {loading && "Loading..."}

      {error && "HUBO UN ERROR"}

    </div>
  );
}

export default RecipesGrid