import React from 'react';
import  {View, Text, StyleSheet, ImageBackground, Image, Button} from 'react-native';


function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            
            <ImageBackground source={require("../assets/aparador.jpg")} style={styles.image}>
                <Text style={styles.upperText}>Vende lo que ya no necesitas</Text>
                <Image source={require("../assets/otherBooks.png")} style={styles.logo}/>
                <Button title="Iniciar Sesion" onPress={()=>navigation.navigate("Login")} color="#241c1b"/>
                <Button title="Registrarse" onPress={()=>navigation.navigate("Register")} color="#241c1b"/>
            </ImageBackground>
            
            {/* <View style={styles.login}>
                <Text style={styles.lowerText} onPress={()=>navigation.navigate("Login")}>Login</Text>
            </View>
            <View style={styles.register}>
                <Text style={styles.lowerText} onPress={()=>navigation.navigate("Register")}>Register</Text>
            </View> */}

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        flex:1,
        justifyContent:"space-evenly",
        alignItems:'center'
    },
    login:{
        backgroundColor:"salmon",
        flex:0.15
    },
    register:{
        backgroundColor:"cyan",
        flex:0.15
    },
    lowerText:{
        fontWeight:"bold",
        fontSize:20
    },
    upperText: {
        backgroundColor:"rgba( 64, 39, 34 ,0.8)",
        color:"white",
        fontSize:22,
        marginTop:13,
        padding:8
    },
    logo:{
        width:100,
        height:100
    }
});

export default WelcomeScreen;