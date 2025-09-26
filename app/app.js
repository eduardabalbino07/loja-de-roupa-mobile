import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CriarConta from '../app/telaCriarConta/index.js';
import Estoque from '../app/telaEstoque/index.js';
import Itens from '../app/telaItens/index.js';

const YourApp = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Criar Conta">
        <Stack.Screen name="Criar Conta" component={CriarConta} />
        <Stack.Screen name="Estoque" component={Estoque} />
        <Stack.Screen name="Itens" component={Itens} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default YourApp;