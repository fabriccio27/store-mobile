import React, {useState} from "react";
import {Text, StyleSheet} from "react-native";


function TextInANest() {

    const [titleText, setTitleText] = useState("El pajaro esta en el nido");
    const [bodyText, setBodyText]=  useState("esto no es realmente un nido");
    
    const onPressTitle = () => {
        setTitleText("El pajaro vio el cielo y se voló");
        console.log("title presseado");
    };
    
    return(
        <Text style={styles.baseText}>
            <Text style={styles.titleText} onPress={onPressTitle}>{titleText}</Text>
        
            <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
    )
}

const styles =  StyleSheet.create({
    baseText:{
        fontWeight:"bold",
        padding:20
    },
    titleText:{
        fontWeight:"bold",
        fontSize:20,
        color:"darkviolet"
    }
});

export default TextInANest;