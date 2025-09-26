import { Button, View } from 'react-native';

export default function CriarConta({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'darkseagreen' }}>
      <Button
        title="Criar Conta"
        onPress={() => navigation.navigate('Estoque')}
      />
    </View>
  );
}