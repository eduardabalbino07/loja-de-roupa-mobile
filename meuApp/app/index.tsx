import { TextInput, View, StyleSheet } from "react-native";

export default function Index() {
  return ( 
    <View style={style.container}>
      <TextInput 
        style={style.input}
        placeholder="Nome"
      />
      <TextInput 
        style={style.input}
        placeholder="Endereço"
      />
      <TextInput 
        style={style.input}
        placeholder="Telefone"
      />
    </View>
  );
}

const style = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
