import { Text, View, TouchableOpacity} from 'react-native';

export default function TelaEstoque({ navigation }) {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Estoque</Text>

      <TouchableOpacity 
        style={styles.botao}
        onPress={() => navigation.navigate("Itens")}
      >
        <Text style={styles.textoBotao}>Ver Itens</Text>
      </TouchableOpacity>
        
    </View>
         
    );
  }

