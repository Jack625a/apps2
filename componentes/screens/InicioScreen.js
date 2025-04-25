//Importacion de dependencias
import React, { useEffect, useState } from "react";
import { View,Text,Image,Alert,Button } from "react-native";
import axios from 'axios';
//import { Button } from "react-native-paper";

//Configuracion de la base de datos AIRTABLE
const APIKey="patzox8huKGcf2Ttp.5a95cd3b9862d7087099ce2d4a63717bd1d53b9c59eda2fd6dbfb8453ab66c2e";
const idBaseDatos="appZ01xbGIuDfPpDv";
const nombreTabla="Productos";




//funcion para eliminar un Producto
const eliminarProducto= async(id)=>{
    try{
        await axios.delete(
        `https://api.airtable.com/v0/${idBaseDatos}/${nombreTabla}`,
        {
            headers:{
                Authorization: `Bearer ${APIKey}`,
            },
        }
        );
        Alert.alert("Producto eliminado correctamente...")

    }catch(error){
        Alert.alert("Error al eliminar el producto..")
        console.error("Error","No se pudo eliminar el producto ",error)
    };
};

eliminarProducto(1)

export default function InicioScreen(){
    //Cargado de los ids
    const [ids,setIds]=useState([]);

    useEffect(()=>{
        const obtnerIds=async ()=>{
        try{
           const respuesta=await axios.get(
                `https://api.airtable.com/v0/${idBaseDatos}/${nombreTabla}`,
                {
                    headers:{
                        Authorization: `Bearer ${APIKey}`,
                    },
                },
            );
            const idsObtenidos=respuesta.data.records.map((registro)=>registro.id);
            setIds(idsObtenidos);
        }catch(error){
            console.error("Error al obtener los IDS",error)
        }
        };
        obtnerIds();
    },[]);


    return(
        <View>
            <Text>
                {ids.length>0 ? ids.join(","):("Obteniendo ids...")}
            </Text>
            <Text>Eliminacion Productos</Text>
            
            
            
            
        </View>
    )
}