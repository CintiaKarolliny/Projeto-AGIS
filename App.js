import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/Login';
import Home from './src/components/Home';
import Cadastro from './src/components/Cadastro';

import Alunos from './src/components/Alunos';
import Sobre from './src/components/Sobre';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Sobre' component={Sobre} />
    <Tab.Screen name='Alunos' component={Alunos} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='menu' component={MainTabNavigator} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
