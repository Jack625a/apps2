//Importacion de dependencias
import React, {useState} from "react";
import { View,Text,TextInput,Button,StyleSheet,Alert } from "react-native";
//Solicitud al servidor 
import axios from "axios"

//Paso 1. Configurar Airtable
const apiKey="";
const idbasedatos=""
const nombreTabla="Productos"


export default function AjustesScreen(){
    const [nombre,setNombre]=useState("")
    const [precio,setPrecio]=useState("")
    const [imagen,setImagen]=useState("")

    //Paso 2. Crear la funcion para enviarProductos
    const agregarProducto= async()=>{
        if(!nombre||!precio||!imagen){
            Alert.alert("Error","Debe completar todos los datos...");
            return;
        }
        try {
            const response=await axios.post(
            `https://api.airtable.com/v0/${idbasedatos}/${nombreTabla}`,
            {
                fields:{
                    nombre:nombre,
                    precio:precio,
                    imagen:imagen,
                },
            },
            {
              headers:{
                Authorization: `Bearer ${apiKey}`, 
                "Content-Type":"application/json",
              },
            //ver la respueta
           
            }
            );
            console.log(response)
            Alert.prompt("Producto Agregado","Se agrego correctamente el producto",response.data)
            setNombre("");
            setPrecio(""),
            setImagen("");
        }catch(error){
            console.error("Error","No se pudo agregar los productos..",error);
            Alert.alert("Error","No se pudo agregar el producto...")
        }
    };

    return(
        <View>
            <Text style={styles.titulos}>Registro de Productos</Text>
                <TextInput
                    placeholder="Ingrese el nombre del producto."
                    value={nombre}
                    onChange={setNombre}
                />
                <TextInput
                    placeholder="Ingrese el precio"
                    value={precio}
                    onChange={setPrecio}
                    keyboardType="numeric"
                />
                <TextInput
                    placeholder="Ingrese la url de la imagen"
                    value={imagen}
                    onChange={setImagen}
                />
                <Button
                    title="Agregar Producto"
                    onPress={agregarProducto}
                />
        </View>
    );
}

//Estilos
const styles=StyleSheet.create({
    titulos:{
        fontSize:22
    }
})