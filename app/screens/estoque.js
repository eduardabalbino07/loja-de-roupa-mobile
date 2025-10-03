import { Button, View } from 'react-native';

export default function Estoque({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'khaki', gap: 15}}>
      <Button
        title="Criar Conta"
        onPress={() => navigation.navigate('Criar Conta')}
      />
      <Button 
      title="Itens" 
      onPress={() => navigation.navigate('Itens')} />
    </View>
  );
}