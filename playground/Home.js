import React from 'react';
import {View, Text, Button} from "react-native";
import styles from "./styles";

/* a navigation tengo acceso porque use el container de react-navigation */
export default function Home({navigation}) {
    return (
        <View style={styles}>
            <Text>Home Screen</Text>
            <Button title="Go to Settings" onPress={()=>navigation.navigate("Settings")}/>
        </View>
    );
}

