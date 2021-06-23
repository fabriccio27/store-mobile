import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";
import CategoriesButton from '../components/CategoriesButton';

import appStyles from '../styles/appStyles';

function CategoriesScreen({navigation}) {
    return (
        <View style={appStyles.container}>
            <ImageBackground style={appStyles.backgroundImageCategories} source={require("../assets/categoriesBack.jpg")}>
            <CategoriesButton innerText={"Libros"} destination={"Category"}/>
            <CategoriesButton innerText={"Perfumes"} destination={"Category"}/>
            <CategoriesButton innerText={"Comida"} destination={"Category"}/>
            </ImageBackground>
            
        </View>
    );
}

/* MockCompleted.navigationOptions={
    headerTitle:()=><Text>Compra exitosa</Text>,
    headerLeft:()=><LogoutButton/>
} */

export default CategoriesScreen;