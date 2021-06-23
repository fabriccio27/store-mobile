import React from 'react';
import {View, ActivityIndicator} from "react-native";
function BriefLoading() {
    return (
        //estos colores quedan mejor
        <View style={{flex:1, justifyContent:"center", backgroundColor:"#b6f0d1"}}>
            <ActivityIndicator size="large" color="#2383a2" />
        </View>
    );
}

export default BriefLoading;