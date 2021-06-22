import React, {useEffect, useContext} from 'react';
import {View, Text, FlatList, Button, Alert, BackHandler} from "react-native";
import loading from '../utils/loading';
import items from "../availableItems";
import Item from '../components/Item';
import ItemsContext from "../utils/ItemsContext";
import AuthContext from '../utils/AuthContext';


//este va wrappeado porque supuestamente fui a buscar info de items
//COMO HAGO PARA QUE TODOS PARTAN DEL MISMO PERO DESPUES CADA UNO TENGA EL SUYO
const ItemsScreen = loading(({navigation}) => {
    const {articulos, setArticulos}= useContext(AuthContext)
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

    //tengo que modificar la barra superior, la hago un componente y a los text les mando un boton
    
    return (
      
        <View>
            <FlatList 
                data={articulos} 
                renderItem={({item})=>{
                    return <Item item={item} />
                }}
            />
        </View>
      
    );
});

export default ItemsScreen;