import { Button, View } from 'react-native';


export default function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'khaki', gap: 15}}>
      <Button
        title="Criar Conta"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
