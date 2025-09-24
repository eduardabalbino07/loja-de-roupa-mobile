import { StyleSheet, Text, View} from 'react-native';

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
       <View style={styles.title}>
        <Text style={styles.title}>Itens</Text>
         <Text style={styles.title}>Estoque</Text>
        
    </View>
  </View>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#050505ff",
    padding: 8,  
    marginBottom: 15,
  },

  });