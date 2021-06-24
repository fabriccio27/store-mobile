import React from 'react';
import {View, ImageBackground} from "react-native";
import CategoriesButton from '../components/CategoriesButton';

import appStyles from '../styles/appStyles';

function CategoriesScreen({navigation}) {
    return (
        <View style={appStyles.container}>
            <ImageBackground style={appStyles.backgroundImageCategories} source={require("../assets/categoriesBack.jpg")}>
                <CategoriesButton innerText={"Libros"} />
                <CategoriesButton innerText={"Perfumes"} />
                <CategoriesButton innerText={"Comida"} />
            </ImageBackground>
            
        </View>
    );
}


export default CategoriesScreen;