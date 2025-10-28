import { Button, View } from 'react-native';

export default function CriarConta({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'darkseagreen' }}>
      <Button
        title="Estoque"
        onPress={() => navigation.navigate('Estoque')}
      />
      <Button
      title="Itens"
      onPress={() => navigation.navigate('Itens')}
      />
    </View>
  );
}