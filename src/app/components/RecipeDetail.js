import parsedData from "@/data/recipes";

const main = async () => {
    const searchParams = parsedData;
    const id = searchParams.get('id');
  
    if (!id) {
      document.body.innerHTML = "<h2>Receta no encontrada</h2>";
      return;
    }
  
    const API_URL = `./app/recipe.html?id=${id}`;
    const response = await fetch(API_URL);
    const recipe = await response.json();
  
    document.querySelector('.receta-container').innerHTML = `
      <h1>${recipe.name}</h1>
      <img src="${recipe.image}" alt="${recipe.name}">
      <p><strong>Tiempo de preparación:</strong> ${recipe.prepTimeMinutes} min</p>
      <p><strong>Tiempo de cocción:</strong> ${recipe.cookTimeMinutes} min</p>
      <p><strong>Ingredientes:</strong></p>
      <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
      <p><strong>Instrucciones:</strong></p>
      <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
      <button onClick={() => window.history.back()}>Volver</button>
    `;
  };
  
  main();  