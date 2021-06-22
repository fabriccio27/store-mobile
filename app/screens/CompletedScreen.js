import React from 'react';
import {View, Text, StyleSheet} from "react-native";

import appStyles from '../styles/appStyles';
import LogoutButton from '../components/LogoutButton';


const CompletedScreen=()=>{
    
        return(
            <View styles={styles.container}>
                
                <Text style={styles.titleOrHeader}>Felicitaciones por tu compra!</Text>
                <Text style={styles.messageBody}>Revisa tu mail para obtener mas detalles del proceso de tu pedido</Text>
                
            </View>
        );
        
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
        
    },
    titleOrHeader:{
        fontFamily:"monospace",
        fontSize:15,
        backgroundColor:"rgba(111, 72, 49,0.8)",
        /* backgroundColor:"#f06414", */
        color:"white",
        padding:20
    },
    messageBody:{
        width:"70%",
        fontWeight:"bold",
        fontSize:25
    }
})

CompletedScreen.navigationOptions = {
    headerTitle:()=><Text style={{alignSelf:"center"}}>Reemplazante</Text>,
    headerLeft:()=><LogoutButton/>
};

export default CompletedScreen;