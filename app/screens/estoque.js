import { Button, View } from 'react-native';

export default function Estoque({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'khaki', gap: 15}}>
      <Button
        title="Estoque"
        onPress={() => navigation.navigate('Itens')}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}