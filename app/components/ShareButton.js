import React from 'react';
import {Image,TouchableOpacity} from "react-native";

function ShareButton({navigation}) {
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("Share")}>
            <Image source={require("../assets/share.png")} style={{width:30, height:30, marginRight:10, padding:10}} />
        </TouchableOpacity>
        
    )
}

export default ShareButton;