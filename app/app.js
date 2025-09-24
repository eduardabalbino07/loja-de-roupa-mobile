 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Home from "./screens/Home";
 import Inicio from "./screens/Inicio";


 const Stack = createNativeStackNavigator();


 function MinhaPilha(){
  return (
    <Stack.Navigator initialRouteName="Home">
     <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Inicio" component={Inicio} />
    </Stack.Navigator>
  );
 }


 export default function MeuApp() {
  return (
    <NavigationContainer>
      <MinhaPilha />
    </NavigationContainer>
  );
 }
