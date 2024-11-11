import * as contentstack from 'contentstack';

const Stack = contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: 'development', // or 'production'
});

export default Stack;