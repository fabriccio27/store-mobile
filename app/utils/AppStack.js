import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Finish from "../screens/NewFinishOpScreen";
import Completed from "../screens/MockCompleted";
import Categories from "../screens/CategoriesScreen";
import Category from "../screens/CategoryScreen";

import ShopButton from "../components/NewShopButton";
import LogoutButton from "../components/LogoutButton";
import CategoryTitle from "../components/CategoryTitle";

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
        //para title no puedo pasar una funcion, paso directamente el componente
        title:<CategoryTitle title={navigation.getParam("which")} />,
        headerRight:()=><ShopButton />
      })
    },
    Completed,
    
}, {initialRouteName:"Categories"})

export default AppStack;
