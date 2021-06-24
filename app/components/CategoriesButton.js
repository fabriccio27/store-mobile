import React from 'react';
import {TouchableOpacity, Text} from "react-native";
import appStyles from '../styles/appStyles';
import { withNavigation } from 'react-navigation';

function CategoriesButton({navigation, innerText}) {
    
    const handlePress = () =>{
        /* el segundo parametro de navigate es objeto de parametros, 
        con esto voy a saber que categoria recuperar en screen Category
        usando navigation.getParam("which") */
        navigation.navigate("Category", {which:innerText});
    };

    return (
        <TouchableOpacity 
        activeOpacity={0.7} 
        style={[appStyles.welcomeButton, {backgroundColor:"#164a24", width:"60%"}]} 
        onPress={handlePress}>
                    <Text style={[appStyles.welcomeButtonText,{textAlign:"center"}]}>{innerText}</Text>
        </TouchableOpacity>
    );
}

export default withNavigation(CategoriesButton);