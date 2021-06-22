import React from 'react';
import  {View, Text, StyleSheet, ImageBackground, Image, Button} from 'react-native';
import appStyles from '../styles/appStyles';
import AppLoading from 'expo-app-loading';
import { useFonts, Oswald_200ExtraLight } from '@expo-google-fonts/oswald';
function WelcomeScreen({navigation}) {

    let [fontsLoaded] = useFonts({
        Oswald_200ExtraLight,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return (
        <View style={styles.container}>
            
            <ImageBackground source={require("../assets/aparador.jpg")} style={styles.image}>
                <Text style={styles.upperText}>ACERCATE AL CONFORT QUE MERECES</Text>
                <Image source={require("../assets/notebook.png")} style={appStyles.logo}/>
                <Button title="Iniciar Sesion" onPress={()=>navigation.navigate("Login")} color="#241c1b"/>
                <Button title="Registrarse" onPress={()=>navigation.navigate("Register")} color="#241c1b"/>
                {/* <Button title="Testear storage" onPress={()=>navigation.navigate("TestScreen")} color="#241c1b"/> */}
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
    lowerText:{
        fontWeight:"bold",
        fontSize:20
    },
    upperText: {
        backgroundColor:"rgba( 64, 39, 34 , 0.8)",
        color:"white",
        fontSize:22,
        marginTop:13,
        padding:8,
        fontFamily:"Oswald_200ExtraLight"
    }
});

export default WelcomeScreen;