import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setContext} from '@apollo/client/link/context';
import {isAccessTokenExpired, refreshTokenAction} from '../lib/refreshToken';
import {ToastAndroid} from 'react-native';

const httpLink = createHttpLink({
  uri: 'https://home-decor-production.up.railway.app/graphql',
});

const authLink = setContext(async (_, {headers}) => {
  let accessToken = await AsyncStorage.getItem('authToken');
  const refreshToken = await AsyncStorage.getItem('refreshToken');

  if (accessToken && refreshToken && isAccessTokenExpired(accessToken)) {
    const newTokens = await refreshTokenAction(refreshToken);

    if (newTokens) {
      accessToken = newTokens.accessToken;
    } else {
      ToastAndroid.show('Failed to refresh token', ToastAndroid.SHORT);
    }
  }

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `${accessToken}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
