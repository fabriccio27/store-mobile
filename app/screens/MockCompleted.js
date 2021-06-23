import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from "react-native";


function MockCompleted(props) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/confetiDark.gif")} style={styles.backImage}>
                <Text style={styles.mainText}>Todo salio bien!</Text>
                <Text style={styles.footText} numberOfLines={4}>Mas informacion respecto de tu orden esta disponible en tu mail</Text>

            </ImageBackground>
            
        </View>
            
        
    );
};

let styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    mainText:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        alignSelf:"center"
    },
    backImage:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"center",
        alignItems:"center"
    },
    footText:{
        color:"lightblue",
        fontSize:20,
        width:"60%",
        textAlign:"center"
    }
});

export default MockCompleted;