import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient, { HttpLink } from 'apollo-client-preset'

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj9rwjvth6uo90124ivfyd05f' }),
  cache
});

export {
  client,
}