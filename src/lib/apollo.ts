import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o92wgt1dul01xif43h7ail/master',
  cache: new InMemoryCache()
})