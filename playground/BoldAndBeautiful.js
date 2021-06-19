import React from "react";
import {Text, StyleSheet} from "react-native";

const BoldAndBeautiful =()=>{
    return(
        <Text style={styles.baseText}>
            Yo soy negrita
            <Text style={styles.innerText}> y roja</Text>
        </Text>
    )
}

export default BoldAndBeautiful;
const styles =  StyleSheet.create({
    baseText:{
        fontWeight:"bold",
        padding:20
    },
    innerText:{
        color:"red"
    }
});