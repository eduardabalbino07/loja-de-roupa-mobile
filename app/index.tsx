import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Page() {

  
  const [produto, setProduto] = useState();

  useEffect(() => {
    const fetchProduto = async () => {
      const response = await fetch('https://21v4pw31-3000.brs.devtunnels.ms/api/produto/1');
      const data = await response.json();
      setProduto(data);
    }

    fetchProduto();
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Produto</Text>
        <Text style={styles.title}>{produto?.nome}</Text>
        <Text style={styles.title}>{produto?.preco}</Text> 
        <Image style={{ height: 400, width: 300 }} source={{ uri: produto?.imagem_url }} /> 
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
  
    title: {
    fontFamily: "arial",
    fontSize: 45,
    fontWeight: "bold",
    color: "#fff",
    padding: 8,  
    marginBottom: 15,
  }
  
});
