import { fetchRecipes } from "@/lib/contentstack"; // Importing your Contentstack helper
import "@/styles/globals.css";

export default function Home({ recipes }) {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.sys.id}>
            <h2>{recipe.fields.name}</h2>
            <p>{recipe.fields.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  try {
    // Fetching recipes from Contentstack
    const recipes = await fetchRecipes();
    return {
      props: { recipes }, // Passing the recipes data as props to the page
    };
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return { props: { recipes: [] } }; // Return empty array in case of error
  }
}

