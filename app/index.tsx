import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Crie sua Conta</Text>
        <Text style={styles.subtitle}>Nome Completo</Text>
        <Text style={styles.subtitle}>Email</Text>
        <Text style={styles.subtitle}>Senha</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#b87fd3ff"
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
    color: "#fff"
  },
  subtitle: {
    fontSize: 26,
    color: "#fff",
  },
});
