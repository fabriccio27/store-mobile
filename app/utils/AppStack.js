import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import Items from "../screens/ItemsScreen";
import Finish from "../screens/FinishOpScreen";
import ShopButton from "../components/ShopButton";
import LogoutButton from "../components/LogoutButton";


const AppStack = createStackNavigator({
    Items:{
        screen: props=>(
          <Items promise={new Promise(resolve=>setTimeout(resolve, 1500))} {...props}/>
        ),
        navigationOptions:({navigation})=>({
          title:navigation.getParam("title") || "Carrito",
          headerLeft:()=><LogoutButton/>/* <Text onPress={()=>navigation.navigate("AuthLoading")}>Cerrar</Text> */,
          headerRight:()=><ShopButton/>
        })
    },
    Finish:{
      screen:Finish,
      navigationOptions:({navigation})=>({
        title:"Completa tu compra"
      })

    }
})

export default AppStack;