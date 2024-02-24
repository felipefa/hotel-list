import { Client, cacheExchange, fetchExchange } from 'urql';

const apiToken = import.meta.env.VITE_GRAPHQL_API_TOKEN;
const url = import.meta.env.VITE_GRAPHQL_API_URL;

export const urqlClient = new Client({
  url,
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    }
  },
  exchanges: [cacheExchange, fetchExchange],
});
