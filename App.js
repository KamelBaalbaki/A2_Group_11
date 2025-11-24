import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Main" component={MainScreen} />
  <Stack.Screen name="About" component={AboutScreen} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

