import React from 'react';
import {View, Text, Image} from "react-native";
import appStyles from '../appStyles';

function NoAuthScreen() {
    return (
        <View style={hereStyle.container}>
            <Image source={require("../assets/sadRobot.jpg")} style={{width:150, height:150}} />
            <Text style={hereStyle.text}>
                No se pudo iniciar sesion. Checkea que tu informacion sea correcta y las mayusculas sean las apropiadas.
            </Text>
        </View>
    );

}
const hereStyle = {
    //si meto styles en array los combina
    container:[appStyles.container,{backgroundColor:"gray"}],
    text:{
        color:"white",
        fontSize:20,
        marginTop:20,
        width:"80%"
    }
}
NoAuthScreen.navigationOptions={
    title:"Credenciales invalidas"
};

export default NoAuthScreen;