import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Welcome from "../screens/WelcomeScreen";
import Register from "../screens/RegisterScreen";
import Login from "../screens/LoginScreen";
import Items from "../screens/ItemsScreen";
import NoAuth from "../screens/NoAuthScreen";

export default createAppContainer (
  createStackNavigator({
    Welcome, 
    Register:{
      screen: props=>(
        <Register promise={new Promise(resolve=>setTimeout(resolve, 1500))} {...props}/>
      )
    }, 
    Login, 
    Items:{
      screen: props=>(
        <Items promise={new Promise(resolve=>setTimeout(resolve, 1500))} {...props}/>
      )
    }, NoAuth
  }, 
  {initialRouteName:"Welcome"})
);