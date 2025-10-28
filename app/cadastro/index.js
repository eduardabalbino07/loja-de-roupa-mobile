import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

export default function Page() {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
       <View style={styles.title}>
        <Text style={styles.title}>Crie sua Conta</Text>
        
        <View style={styles.input}>
          <TextInput style={styles.inputTexto} placeholder={'Nome Completo'}/>
          <TextInput style={styles.inputTexto} placeholder={'Email'}/>
          <TextInput style={styles.inputTexto} placeholder={'Senha'} secureTextEntry={true}/>
        </View>

         <TouchableOpacity style={styles.button} onPress={() => ("Conta criada!")}>
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

  input: {
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
  },

  inputTexto: {
    fontSize: 20,
    marginBottom: 15,
    width: 250,
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    color: '#4d4848ff', 
  },

});
