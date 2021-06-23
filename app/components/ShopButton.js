import React, {useState, useEffect} from 'react';
import {Image,TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";

function ShopButton({navigation}) {
    /* podria mostrar numero aca */
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("Finish")}>
            <Image source={require("../assets/shop.png")} style={{width:30, height:30, marginRight:10, padding:10}} />
        </TouchableOpacity>
        
    )
}

export default withNavigation(ShopButton);