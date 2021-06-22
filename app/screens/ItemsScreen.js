import React, {useEffect, useContext, useState} from 'react';
import {View, Text, FlatList, Button, Alert, BackHandler} from "react-native";
import AppLoading from 'expo-app-loading';
import loading from '../utils/loading';
import items from "../availableItems";
import Item from '../components/Item';
import ItemsContext from "../utils/ItemsContext";
import AuthContext from '../utils/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import users from '../registeredUsers';


//este va wrappeado porque supuestamente fui a buscar info de items
//COMO HAGO PARA QUE TODOS PARTAN DEL MISMO PERO DESPUES CADA UNO TENGA EL SUYO
const ItemsScreen = loading(({navigation}) => {
    /* const {articulos, setArticulos}= useContext(AuthContext) */
    const {userSession} =  useContext(AuthContext);
    const [isReady, setIsReady] = useState(false);
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
        console.log(resp);
        setRecuperado(JSON.parse(resp));
        setIsReady(true);
      })
      .catch(err=>console.log("Esto paso tratando de recuperar info de usuario", err));
    }
    
    useEffect(()=>{
      fetchUserInfo();
    },[])
    //por ahi no necesito state isReady, como defini recuperado como null, si hago !recuperado deberia andar.
    if (!isReady){
      return <Text>Recuperando tu informacion...</Text>
    }
    /* return <Text>Ya estamos cargados!</Text> */
    return(
      <View>
            <FlatList 
                data={recuperado.shopState} 
                renderItem={({item})=>{
                    return <Item item={item} />
                }}
            />
      </View>

    )
    /* if (!isReady){
      return <AppLoading startAsync={fetchUserInfo} onFinish={setIsReady(true)}/>
    } */
    /* useEffect(()=>{
      return (
      
        <View>
            <FlatList 
                data={recuperado} 
                renderItem={({item})=>{
                    return <Item item={item} />
                }}
            />
        </View>
      
      );
    },[recuperado]); */
    
});

export default ItemsScreen;