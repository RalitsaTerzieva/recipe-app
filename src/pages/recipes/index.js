import Stack from './../../lib/contentstack';

export async function getStaticProps() {
  const Query = Stack.ContentType('recipe').Query();
  const data = await Query.toJSON().find();

  return {
    props: {
      recipes: data[0] || [],
    },
  };
}

export default function RecipeList({ recipes }) {
  return (
    <div>
      <h1>All Recipes</h1>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.uid}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image.url} alt={recipe.title} />
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
