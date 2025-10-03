import { View, Text } from 'react-native';

export default function TelaItens({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Itens</Text>

        <TouchableOpacity 
         style={styles.botao}
        onPress={() => navigation.navigate("Criar Conta")}
        >
        <Text style={styles.textoBotao}>Ver para Criar Conta</Text>
        </TouchableOpacity>
                   
    </View>
                    
  );
}