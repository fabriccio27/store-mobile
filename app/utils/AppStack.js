import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import Items from "../screens/ItemsScreen";
import Finish from "../screens/NewFinishOpScreen";
import Completed from "../screens/MockCompleted";
import Categories from "../screens/CategoriesScreen";
import Category from "../screens/CategoryScreen";

import ShopButton from "../components/NewShopButton";
import LogoutButton from "../components/LogoutButton";


const AppStack = createStackNavigator({
    Categories:{
      screen:Categories,
      navigationOptions:()=>({
        title:"Categorias",
        headerLeft:()=><LogoutButton/>
      })
    },
    Finish:{
      screen:Finish,
      navigationOptions:({navigation})=>({
        title:"Completa tu compra"
      })
    },
    Category:{
      screen:Category,
      navigationOptions:({navigation})=>({
        title:navigation.getParam("which"),
        headerRight:()=><ShopButton />
      })
    },
    Completed,
    
},{initialRouteName:"Categories"})

export default AppStack;

/*  Items:{
        screen: props=>(
          <Items promise={new Promise(resolve=>setTimeout(resolve, 1500))} {...props}/>
        ),
        navigationOptions:({navigation})=>({
          title:navigation.getParam("title") || "Carrito",
          headerLeft:()=><LogoutButton/>,
          headerRight:()=><ShopButton/>
        })
    }, */