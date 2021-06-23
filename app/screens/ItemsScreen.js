import React, {useEffect, useContext, useState} from 'react';
import {View, Text, FlatList, Alert, BackHandler} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import loading from '../utils/loading';
import Item from '../components/Item';
import BriefLoading from '../components/BriefLoading';

import AuthContext from '../utils/AuthContext';
import SessionContext from "../utils/SessionContext";

/* 
import users from '../registeredUsers';
import ItemsContext from "../utils/ItemsContext";
import items from "../availableItems";
 esto lo usaba cuando estaba todo hardcodeado*/




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
    
      
    useEffect(()=>{
      let isCancelled=false;

      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(userSession)
          if(!isCancelled){
            const toSet = jsonValue != null ? JSON.parse(jsonValue) : null;
            setRecuperado(toSet);
          }
          
        } catch(e) {
          if(!isCancelled){
            console.log("errorrrr", e);
          }
        }
      }
      
      getData();
      
      return () => {
        isCancelled = true;
      };
    },[recuperado]);
    
    
    if (!recuperado){
      return <BriefLoading/>
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