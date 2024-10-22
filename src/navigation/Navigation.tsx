import {useNavigations} from './useTypeNavigation';
import {navigationLogged, navigationSignUp} from '../constants/contents';
import {useAuth} from './authContext';

const Navigation = () => {
  const {Stack} = useNavigations();
  const {isLogin} = useAuth();
  return (
    <Stack.Navigator>
      {isLogin
        ? navigationLogged.map(nav => (
            <Stack.Screen
              name={nav.name}
              component={nav.Component}
              key={nav.id}
              options={{headerShown: false}}
            />
          ))
        : navigationSignUp.map(nav => (
            <Stack.Screen
              name={nav.name}
              component={nav.Component}
              key={nav.id}
              options={{headerShown: false}}
            />
          ))}
    </Stack.Navigator>
  );
};

export default Navigation;
