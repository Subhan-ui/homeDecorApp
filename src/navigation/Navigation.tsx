import {useNavigations} from './useTypeNavigation';
import {navigationLogged, navigationSignUp} from '../constants/contents';
import {useAuth} from './authContext';
import {Splash} from '../screens';

const Navigation = () => {
  const {Stack} = useNavigations();
  const {isLogin} = useAuth();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
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
