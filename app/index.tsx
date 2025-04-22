import {Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={style.container}
      >
      <Text>Bem vindo!</Text>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  }
})

