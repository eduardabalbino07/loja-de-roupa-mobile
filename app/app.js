import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CriarConta from '../app/telaCriarConta/index.js';

const YourApp = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Criar Conta" component={CriarConta} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default YourApp;