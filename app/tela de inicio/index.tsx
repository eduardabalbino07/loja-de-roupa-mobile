import { StyleSheet, Text, View, NavigationContainer} from '@react-navigation/native';

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
       <View style={styles.title}>
        <Text style={styles.title}>Itens</Text>
         <Text style={styles.title}>Estoque</Text>

    <NavigationContainer>
	    <App />
	</NavigationContainer>

    function App() {
	return (
	<View>
	    <Text>Tela de Inicio</Text>
	</View>
	);
}
        
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