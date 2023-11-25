import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';
import TelaPrincipal from './src/components/TelaPrincipal';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
        <Stack.Screen name="Principal" component={TelaPrincipal} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//EMAIL:
// eve.holt@reqres.in
