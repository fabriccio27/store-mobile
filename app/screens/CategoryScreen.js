import React from 'react';
import {View, Text, FlatList,ImageBackground} from "react-native";
import ItemCategory from "../components/ItemCategory";

import availableItems from "../availableItems";
import hashImages from "../utils/imagesHashtable";

function CategoryScreen({navigation}) {

    const itemsCategoria = availableItems.filter((obj)=>{
        return obj.categoria==navigation.getParam("which");
        //recupera bien los items el array de objetos segun categoria
    })
    
    return (
        <View style={{flex:1}}>

            <ImageBackground source={hashImages[navigation.getParam("which")]} style={{flex:1, justifyContent:"center"}}>
            <FlatList
                data={itemsCategoria} 
                renderItem={({item})=>{
                  return <ItemCategory item={item} />
                }} 
            />
            </ImageBackground>
        </View>
    );
}

export default CategoryScreen;