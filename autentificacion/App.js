import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

//PASO 1. IMPORTAR LAS DEPENDENCIAS
import React, {useState, useEffect} from 'react'; //gestion de estados
//importacion del webBrowser
import * as WebBrowser from 'expo-web-browser'; //Navegador dentro la aplicacion
import * as Google from 'expo-auth-session/providers/google'; //El proveedor de autetificacion (google)
import {signInWithCredential,GoogleAuthProvider,onAuthStateChanged} from 'firebase/auth';

//Paso 2. Definir el navegador
WebBrowser.maybeCompleteAuthSession();

export default function App() {
  //Paso 3. Configurar las credenciales de conexion
  const [user,setUser]=useState(null);
  const [peticion,respuesta,datosAsincronos]=Google.useAuthRequest({
    webClientId:"idClienteDegoogleWeb"

  });

  //Paso 4. Configurar las sesion 
  useEffect(()=>{
    const conexion=onAuthStateChanged(auth, (user)=>{
      setUser(user);
    });
    return ()=>conexion();
  }, []);




  return (
    <View style={styles.container}>
      <Button
        title='Iniciar Sesion con Google'
        onPress={()=>datosAsincronos()}
      >

      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
