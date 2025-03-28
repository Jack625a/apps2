import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, 
  TouchableOpacity,  
  TextInput, 
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';

//Importar los iconos
import {Ionicons} from '@expo/vector-icons'

//Importacion de las dependencias
//barra navegacion inferior
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//contenedor para navegacion
import {NavigationContainer} from '@react-navigation/native'
//Importar las pantallas (screens)


import AjustesScreen from './screens/AjustesScreen';
import InicioScreen from './screens/InicioScreen';
import ProductoScreen from './screens/ProductoScreen';
//Paso 2. crear la barra de naveagcion
const Tab=createBottomTabNavigator();

export default function App() {
  return (
    //Paso 3. crear el contenedor de navegacion
   
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({
            focused, color,size
          })=>{
            let iconoName;
            if(route.name=="Inicio"){
              iconoName= focused ? "home": "home-outline";
            }else if(route.name=="Productos"){
              iconoName=focused? "shop":"shop-outline"            
            } else if(route.name=="Ajustes"){
              iconoName=focused? "settings":"settings-outline"
            }
            return <Ionicons
              name={iconoName}
              size={size}
              color={color}
            />
          },
          tabBarActiveTintColor:'red', //color cuando esta activo
          tabBarInactiveTintColor:'yellow', //Color cuando esta inactivo
          tabBarStyle:{
            backgroundColor:'#2E778B',
            padding:10
          }
        })}
>



      
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
