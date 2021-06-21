import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import Items from "../screens/ItemsScreen";
import ShopButton from "../components/ShopButton";
import LogoutButton from "../components/LogoutButton";

const AppStack = createStackNavigator({
    Items:{
        screen: props=>(
          <Items promise={new Promise(resolve=>setTimeout(resolve, 1500))} {...props}/>
        ),
        navigationOptions:({navigation})=>({
          title:navigation.getParam("title") || "Carrito",
          headerLeft:()=><Text onPress={()=>navigation.navigate("Auth")}>Cerrar</Text>,
          headerRight:()=><ShopButton/>
        })
    }
})

export default AppStack;