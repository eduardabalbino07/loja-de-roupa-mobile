import { Text, View, StyleSheet } from "react-native";

const usuarios = [
  {
    id: 1,
    nome: "Duda",
    cargo: "Professora"
  },
  {
    id: 2,
    nome: "Raí",
    cargo: "Aluno"
  }
];

export default function Index() {
  return ( 
    <View
      style={style.container}
    >
      {
        usuarios.map( item => (
          <View style={style.itemLista}>
            <Text style={style.textoLista}>{item.nome}</Text>
          </View>
        ))
      }
    </View>
  );
}

const style = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  itemLista: {
    width: '100%',
    padding: 10,
    marginBottom: 2,
    backgroundColor: 'pink'
  },

  textoLista: { 
    fontSize: 20 
  }

})