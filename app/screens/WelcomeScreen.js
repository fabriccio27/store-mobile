import React from 'react';
import  {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import appStyles from '../styles/appStyles';

import AppLoading from 'expo-app-loading';
import WelcomeButton from '../components/WelcomeButton';

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
                
                <WelcomeButton innerText={"Iniciar Sesion"} destination={"Login"}/>
                <WelcomeButton innerText={"Registrarse"} destination={"Register"}/>
                
            </ImageBackground>
        
        </View>
    );
};

/* mover esto a archivo de styles me causó problemas, lo dejo acá para que no rompa */
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