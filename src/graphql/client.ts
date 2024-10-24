import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://192.168.100.4:4000/graphql',
});

const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('authToken');
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
