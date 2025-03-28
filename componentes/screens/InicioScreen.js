//Importacion de dependencias
import React from "react";
import { View,Text,Image } from "react-native";

export default function InicioScreen(){
    return(
        <View>
            <Text>Pantalla Inicio</Text>
            <Image
                source={{uri:"https://lluviadigital.com/wp-content/uploads/2024/04/Serie-de-emails-de-bienvenida.png"}}
                
            />
        </View>
    )
}