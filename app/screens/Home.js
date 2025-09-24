import { Button, View } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'darkseagreen' }}>
      <Button
        title="Voltar"
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}
