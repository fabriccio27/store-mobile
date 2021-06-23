import React from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity} from "react-native";
import LogoutButton from '../components/LogoutButton';

function MockCompleted({navigation}) {

    const handlePress = ()=>{
        navigation.navigate("Items");
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/confetiDark.gif")} style={styles.backImage}>
                <Text style={styles.mainText}>Todo salio bien!</Text>
                <Text style={styles.footText} numberOfLines={4}>Mas informacion respecto de tu orden esta disponible en tu mail</Text>

                <TouchableOpacity onPress={handlePress} style={styles.touchableButton}>
                    <Text style={styles.touchableText}>Volver a index</Text>
                </TouchableOpacity>
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
    },
    touchableButton:{
        backgroundColor:"rgb(54, 145, 97)",
        borderRadius:10,
        marginTop:20,
        padding:10
    },
    touchableText:{
        color:"white"
    }
});

MockCompleted.navigationOptions={
    headerTitle:()=><Text>Compra exitosa</Text>,
    headerLeft:()=><LogoutButton/>
}
export default MockCompleted;