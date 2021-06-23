import React from 'react';
import {View, Text} from "react-native";
import appStyles from '../styles/appStyles';
import BriefLoading from '../components/BriefLoading';
import { useFonts, WorkSans_200ExtraLight} from '@expo-google-fonts/work-sans';

function ShareScreen() {
    let [fontsLoaded] = useFonts({
        WorkSans_200ExtraLight,
    });
    
    if (!fontsLoaded) {
      return <BriefLoading />;
    }

    return (
        <View style={[appStyles.container, {backgroundColor:"#5ea4e6"}]}>
            <Text style={[appStyles.titleOrHeader,{fontFamily:"WorkSans_200ExtraLight", backgroundColor:"#10b023", marginBottom:20}]}>Comparti la app con tus amigos!</Text>
            <Text style={appStyles.shareBottomText}>Mientras mas seamos, mas beneficios vamos a conseguir</Text>
            <Text style={[appStyles.shareBottomText,{fontSize:20}]}>entre todos</Text>
        </View>
    );
}
ShareScreen.navigationOptions={
    title:"Corre la voz!"
};
export default ShareScreen;