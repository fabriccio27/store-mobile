import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/WelcomeScreen";
import Login from "../screens/LoginScreen";
import Register from "../screens/RegisterScreen";
import Share from "../screens/ShareScreen";
import NoAuth from "../screens/NoAuthScreen";
import ShareButton from "../components/ShareButton";

const AuthStack = createStackNavigator({
    Welcome:{
        screen:Welcome,
        navigationOptions:({navigation})=>({
          title:"Bienvenido",
          headerRight:()=><ShareButton navigation={navigation}/>
        })
      }, 
      Login, 
      Register:{
        screen:Register,
        navigationOptions:()=>({
          title:"Datos basicos"
        })
      },
      Share,
      NoAuth
},
{initialRouteName:"Welcome"})

export default AuthStack;