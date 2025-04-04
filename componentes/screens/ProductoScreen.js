//Importacion de dependencias
import React, {useState,useEffect} from "react";
//Componentes (Flatlist, Image)
import { View,Text,FlatList,Image,StyleSheet, Button } from "react-native";
import axios from "axios";

const token= "patzox8huKGcf2Ttp.5a95cd3b9862d7087099ce2d4a63717bd1d53b9c59eda2fd6dbfb8453ab66c2e"
const idBaseDatos= "appZ01xbGIuDfPpDv";
const nombreTabla="Productos";
//crear los datos locales
/*const datos=[
    {
        id:"1",
        nombre:"Producto1",
        precio:150,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_10__3.png'
    },
    {
        id:"2",
        nombre:"Producto2",
        precio:450,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_10__3.png'
    },
    {
        id:"3",
        nombre:"Producto3",
        precio:850,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_10__3.png'
    },
    {
        id:"4",
        nombre:"Producto4",
        precio:1550,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_10__3.png'
    },
    {
        id:"5",
        nombre:"Producto5",
        precio:4350,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_10__3.png'
    },
    {
        id:"6",
        nombre:"Producto6",
        precio:12,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_10__3.png'
    },

];*/



//Paso 2. COMPONENTE DEL CARDVIEW - plantilla
const ProductoCard=({
    nombre,precio,imagen
})=>{
return(
<View style={styles.card}>
        <Image
            source={{uri:imagen}}
            style={styles.imagen}
        />
        <Text
            style={styles.titulo}
        >
            {nombre}
        </Text>
        <Text style={styles.subtitulo}>
            {precio}
        </Text>

    </View>


);
    
}

//Componente principal

export default function ProductoScreen(){
    //Variables para obtencion de datos
    const [productos,setProductos]=useState([]);
    const [cargar,setCargar]=useState(true);

    //Funcion para obtner los datos de airtable
    const obtenerProductos=async ()=>{
        try {
            const response=await axios.get(
            `https://api.airtable.com/v0/${idBaseDatos}/${nombreTabla}`,
            {
                headers:{
                    Authorization: `Bearer ${token}`
                },
            }
            );
            //Obtener los datos de la respuesta que encvia la base de datos
            const productoData=response.data.records.map((registro)=>({
                id:registro.id,
                nombre:registro.fields.nombre,
                precio:registro.fields.precio,
                imagen:registro.fields.imagen,
            }));
            setProductos(productoData)
        }catch(error){
            console.error("Error al obtener los datos ",error)
        }finally{
            setCargar(false);
        }
    };

    //Efecto
    useEffect(()=>{
        obtenerProductos();
    },[]);






    return(
        <View style={styles.contenedor}>
            <FlatList
                data={productos}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>
                    <ProductoCard 
                        nombre={item.nombre}
                        precio={item.precio}
                        imagen={item.imagen} 
                    />}       
            />
        </View>
    );
}

//PASO 4. PONER ESTILOS
const styles=StyleSheet.create({
    card:{
        backgroundColor:"green",
        borderRadius:20,
        padding:15,
        margin:10,
        alignItems:"center",
    },
    imagen:{
        width:150,
        height:200,
        borderRadius:20
    },
    titulo:{
        fontSize:18,
        fontWeight:'bold',

    },
    subtitulo:{
        fontSize:16,
    },
    contenedor:{
        
        padding:15
    }

})