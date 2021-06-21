import React, {useContext, useEffect} from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { View, ActivityIndicator } from "react-native";

import AuthContext from "./AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import appStyles from "../appStyles";

const FirstScreen = ({navigation})=>{
    const {isAuth} = useContext(AuthContext);

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate(isAuth?"App":"Auth");
        },3000)
    },[])

    return (
        <View style={appStyles.container}>
            <ActivityIndicator color="black"/>
        </View>
    );
}

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading:FirstScreen,
        App:AppStack,
        Auth:AuthStack
    },
    {initialRouteName:"AuthLoading"}
));