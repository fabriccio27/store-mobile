import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button} from "react-native";
import loading from '../utils/loading';
import items from "../availableItems";
import styles from "../appStyles";


//este va wrappeado porque supuestamente fui a buscar info de items
const  ItemsScreen = loading(({navigation}) => {

    //tengo que modificar la barra superior, la hago un componente y a los text les mando un boton
    const [articulos, setArticulos]= useState(items)
    

    return (
        <View>
            
            <FlatList 
                data={items} 
                renderItem={({item})=>{
                    return <Text style={styles.listItem}>{item.description} | {item.value}</Text>
                }}
            />
        </View>
    );
})

export default ItemsScreen;