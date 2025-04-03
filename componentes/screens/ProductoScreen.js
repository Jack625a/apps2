//Importacion de dependencias
import React from "react";
//Componentes (Flatlist, Image)
import { View,Text,FlatList,Image,StyleSheet, Button } from "react-native";

//crear los datos locales
const datos=[
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

];

//Paso 2. COMPONENTE DEL CARDVIEW - plantilla
const ProductoCard=({
    nombre,precio,imagen
})=>{
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
}

//Componente principal

export default function ProductoScreen(){
    return(
        <View style={styles.contenedor}>
            <FlatList
                data={datos}
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
        flex:1,
        padding:15
    }

})