import React, {useEffect, useContext, useState} from 'react';
import {View, Text, FlatList, Alert, BackHandler} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import loading from '../utils/loading';
import Item from '../components/Item';

import AuthContext from '../utils/AuthContext';
import SessionContext from "../utils/SessionContext";

import users from '../registeredUsers';
import ItemsContext from "../utils/ItemsContext";
import items from "../availableItems";
import AppLoading from 'expo-app-loading';



//este va wrappeado porque supuestamente fui a buscar info de items
//COMO HAGO PARA QUE TODOS PARTAN DEL MISMO PERO DESPUES CADA UNO TENGA EL SUYO
const ItemsScreen = loading(({navigation}) => {
    /* const {articulos, setArticulos}= useContext(AuthContext) */
    const {userSession} =  useContext(AuthContext);
  
    const [recuperado, setRecuperado] =  useState(null);

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Momento", "Queres salir de la app?", [
            {
              text: "No",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Si", onPress: () => BackHandler.exitApp() }
            //aca podria agregar lo de cerrar sesion
          ]);
          return true;
        };
        
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    
    const fetchUserInfo=()=>{
      AsyncStorage.getItem(userSession)
      .then(resp =>{
        setRecuperado(JSON.parse(resp));
      })
      .catch(err=>console.log("Esto paso tratando de recuperar info de usuario", err));
    }
    
    useEffect(()=>{
      fetchUserInfo();
    },[recuperado]); //si no hago que escuche a recuperado, no me muestra la actualizacion

    if (!recuperado){
      return <Text>Recuperando tu informacion...</Text>
    }else{
      return(
        <SessionContext.Provider value={{recuperado, setRecuperado}}>
        <View>
              <FlatList 
                  data={recuperado.shopState} 
                  renderItem={({item})=>{
                      return <Item item={item} />
                  }}
              />
        </View>
        </SessionContext.Provider>
      );

    }
    
    
    
});

export default ItemsScreen;