import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { auth } from '../../firebaseConfig';

export default function Page({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

   const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '7909498411-a1kpcp0g126od7a0l6qgthn5uqhesrso.apps.googleusercontent.com', // ID Cliente OAuth do console do Google Cloud
        webClientId: '7909498411-a1kpcp0g126od7a0l6qgthn5uqhesrso.apps.googleusercontent.com',
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);

            signInWithCredential(auth, credential)
                .then(async (result) => {
                    const user = result.user;
                    await AsyncStorage.setItem('@user', JSON.stringify(user)); //para cadastrar o usuário no AsyncStorage
                    setModalVisible(false);
                    navigation.replace('questions'); // navega para a tela de questões, já que conseguiu fazer login
                })
                .catch((error) => {
                    Alert.alert('Erro', 'Falha ao autenticar com o Google.');
                    console.error(error);
                });
        }
    }, [response]);

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

         <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Login</Text>
                        <Text style={styles.modalText}>Escolha uma forma de login:</Text>


                        <TouchableOpacity
                            style={styles.googleButton}
                            onPress={() => promptAsync()}
                            disabled={!request}
                        >
                            <Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png',
                                }}
                                style={styles.googleLogo}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={styles.closeButton}
                        >
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
