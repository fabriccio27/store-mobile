import React from "react";
import {Text} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Welcome from "../screens/WelcomeScreen";
import Register from "../screens/RegisterScreen";
import Login from "../screens/LoginScreen";
import Items from "../screens/ItemsScreen";
import NoAuth from "../screens/NoAuthScreen";

export default createAppContainer (
  createStackNavigator({
    Welcome:{
      screen:Welcome,
      navigationOptions:()=>({
        title:"Bienvenido",
        headerRight:()=><Text>Compartir</Text>
      })
    }, 
    Login, 
    Register:{
      screen:Register,
      navigationOptions:()=>({
        title:"Datos basicos"
      })
    }, 
    Items:{
      screen: props=>(
        <Items promise={new Promise(resolve=>setTimeout(resolve, 1500))} {...props}/>
      ),
      navigationOptions:({navigation})=>({
        title:navigation.getParam("title") || "Carrito",
        headerLeft:()=><Text onPress={()=>console.log("fijarse como desloguear")}>Cerrar</Text>,
        headerRight:()=><Text>Icon</Text>
      })
    }, NoAuth
  }, 
  {initialRouteName:"Welcome"})
);