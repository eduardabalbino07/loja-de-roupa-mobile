import { StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
       <View style={styles.inputContainer}>
        <Text style={styles.title}>Crie sua Conta</Text>
        
        <View style={styles.inputs}>
        <TextInput style={styles.inputs} placeholder={'Nome Completo'}/>
        <TextInput style={styles.inputs} placeholder={'Email'}/>
        <TextInput style={styles.inputs} placeholder={'Senha'} secureTextEntry={true}/></View>

         <TouchableOpacity style={styles.button} onPress={() => alert("Conta criada!")}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
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
    backgroundColor: "#B185BD"
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
    color: "#fff",
    padding: 8,  
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 26,
    color: "#dbd3d3ff",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 8,  
    marginBottom: 15,
    borderRadius: 6,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#B185BD",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

inputs: {
      borderWidth: 2,
      borderColor: '#fff', 
      marginBottom: 15,
      width: 200,
      paddingHorizontal: 20,
     
    },
inputContainer: {
    alignItems: "center",
  }

});
