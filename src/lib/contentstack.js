import * as contentstack from 'contentstack';

const Stack = contentstack.Stack({
    api_key: process.env.CONTENTSTACK_API_KEY,
    access_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    environment_name: process.env.CONTENTSTACK_ENVIRONMENT
});

export async function fetchRecipes() {
    try {
      // Fetch entries from 'Recipe' content type
      const recipeEntries = await Stack.ContentType('recipe').Query().toJSON().find();
  
      // Fetch entries from 'Recipe 2' content type
      const recipe2Entries = await Stack.ContentType('recipe2').Query().toJSON().find();
  
      // Combine both recipe data (if you want them together in one array)
      const allRecipes = [...recipeEntries.items, ...recipe2Entries.items];
      
      return allRecipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return [];
    }
  }

export default Stack;