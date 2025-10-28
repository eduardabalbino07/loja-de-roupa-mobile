import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CriarConta from './telaCriarConta/index.js';
import Estoque from './telaEstoque/index.js';
import Itens from './telaItens/index.js';

const Drawer = createDrawerNavigator();


  function MeuMenuLateral() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Criar Conta" component={CriarConta} />
        <Drawer.Screen name="Estoque" component={Estoque} />
        <Drawer.Screen name="Itens" component={Itens} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MeuMenuLateral />
    </NavigationContainer>
  );
}