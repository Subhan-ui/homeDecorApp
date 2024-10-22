import {useRef} from 'react';
import {Provider} from 'react-redux';

import {makeStore, AppStore} from '../store/store';
import {ApolloProvider} from '@apollo/client';
import client from '../graphql/client';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from '../navigation/authContext';

export default function StoreProvider({children}: {children: React.ReactNode}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <NavigationContainer>
        <AuthProvider>
          <ApolloProvider client={client}>{children}</ApolloProvider>
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
