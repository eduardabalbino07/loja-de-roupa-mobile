import {Text, View } from 'react-native';

export default function TelaCriarConta({ navigation }) {
    return (
     <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TouchableOpacity 
        style={styles.botao}
        onPress={() => navigation.navigate('Estoque')}
      >
        <Text style={styles.textoBotao}>Voltar para Estoque</Text>
      </TouchableOpacity>

  </View>
 );
}