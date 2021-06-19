import React from 'react';
import {View, Text, Button} from "react-native";
import styles from "./styles";

/* a navigation tengo acceso porque use el container de react-navigation */
export default function Settings({navigation}) {
    return (
        <View style={styles}>
            <Text>Settings Screen</Text>
            <Button title="Go Home Settings, you're drunk" onPress={()=>navigation.navigate("Home")}/>
        </View>
    );
}