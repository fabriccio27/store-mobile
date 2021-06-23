import React from 'react';
import {TouchableOpacity, Text} from "react-native";
import appStyles from '../styles/appStyles';
import { withNavigation } from 'react-navigation';

function WelcomeButton({navigation, innerText, destination}) {
    const handlePress = () =>{
        navigation.navigate(destination);
    };

    return (
        <TouchableOpacity activeOpacity={0.7} style={appStyles.welcomeButton} onPress={handlePress}>
                    <Text style={appStyles.welcomeButtonText}>{innerText}</Text>
        </TouchableOpacity>
    );
}

export default withNavigation(WelcomeButton);