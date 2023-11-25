import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../Home';
import Adicionar from '../Adicionar';
import Lista from '../Lista';
import Remover from '../Remover';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home',
  },
  Adicionar: {
    name: 'add-circle-outline',
  },
  Deletar: {
    name: 'trash-outline',
  },
  Lista: {
    name: 'list-outline',
  },

};
export default function App(){
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name] || { name: 'ios-home' };
            return <Icon name={name} color={color} size={size} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Adicionar" component={Adicionar} />
        <Tab.Screen name="Remover" component={Remover} />
        <Tab.Screen name="Lista" component={Lista} />
      </Tab.Navigator>
  );
}
