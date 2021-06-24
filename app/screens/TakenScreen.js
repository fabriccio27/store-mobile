import React from 'react';
import {View, Text} from "react-native";

function TakenScreen(props) {
    return (
        <View style={{backgroundColor:"crimson", flex:1, justifyContent:"center"}}>
            <Text style={{color:"white", fontSize:25, fontWeight:"bold"}}>Por favor elegi otro nombre de usuario.</Text>
        </View>
    );
}

export default TakenScreen;