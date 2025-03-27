import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, 
  TouchableOpacity,  
  TextInput, 
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';

//Importacion de las dependencias
//barra navegacion inferior
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//contenedor para navegacion
import {NavigationContainer} from '@react-navigation/native'
//Importar las pantallas (screens)
import {InicioScreen} from './screens/InicioScreen';
import {ProductoScreen} from './screens/ProductoScreen';
import {AjustesScreen} from './screens/AjustesScreen';


//Paso 2. crear la barra de naveagcion
const Tab=createBottomTabNavigator();

export default function App() {
  return (
    //Paso 3. crear el contenedor de navegacion
   
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
         name='Inicio'
         component={InicioScreen}
         
        />
        <Tab.Screen
          name='Productos'
          component={ProductoScreen}
        />
        <Tab.Screen
          name='Ajustes'
          component={AjustesScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>


    /*
    <ScrollView >
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
      title='Boton de Prueba'
      onPress={()=>alert('Click en el Boton')}
      
      ></Button>
      <TouchableOpacity
        style={styles.boton}
        onPress={()=>alert('Boton2')}
      >
        <Text style={styles.botonTexto}>Boton 2</Text>
      </TouchableOpacity>
      <TextInput
        placeholder='Ingrese su nombre: '
        keyboardType='phone-pad'
        autoComplete='tel-device'
      />
      <Image
        source={{uri:'https://kinsta.com/es/wp-content/uploads/sites/8/2023/04/react-must-be-in-scope-when-using-jsx.jpg'} }
        style={styles.imagenes}
      />
      <Image
        source={{uri:'https://kinsta.com/es/wp-content/uploads/sites/8/2023/04/react-must-be-in-scope-when-using-jsx.jpg'} }
        style={styles.imagenes}
      />
      <Image
        source={{uri:'https://kinsta.com/es/wp-content/uploads/sites/8/2023/04/react-must-be-in-scope-when-using-jsx.jpg'} }
        style={styles.imagenes}
      />
      <Image
        source={{uri:'https://kinsta.com/es/wp-content/uploads/sites/8/2023/04/react-must-be-in-scope-when-using-jsx.jpg'} }
        style={styles.imagenes}
      />
      <Image
        source={{uri:'https://kinsta.com/es/wp-content/uploads/sites/8/2023/04/react-must-be-in-scope-when-using-jsx.jpg'} }
        style={styles.imagenes}
      />
      <Image
        source={{uri:'https://kinsta.com/es/wp-content/uploads/sites/8/2023/04/react-must-be-in-scope-when-using-jsx.jpg'} }
        style={styles.imagenes}
      />
      <ActivityIndicator
      
      size='large'
      color='red-' />



    </ScrollView> */
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    
    width:300,
    backgroundColor:'red',
    padding:10,
    borderRadius:20,


  },
  botonTexto:{
    color:'#fff'
  },
  imagenes:{
    width:150,
    height:200,
    borderRadius:50,
    padding:10,
    margin:20
  
  }
});
