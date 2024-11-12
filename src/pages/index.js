import { fetchRecipes } from "@/lib/contentstack";

export default function Home({ recipes }) {
  console.log(recipes)
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
      props:  { recipes },
    };
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return { props: { recipes: [] } };
  }
}
