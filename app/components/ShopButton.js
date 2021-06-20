import React from 'react';
import {Image,TouchableOpacity} from "react-native";

function ShopButton({navigation}) {
    return(
        <TouchableOpacity onPress={()=>console.log("goint to checkout")}>
            <Image source={require("../assets/shop.png")} style={{width:30, height:30, marginRight:10, padding:10}} />
        </TouchableOpacity>
        
    )
}

export default ShopButton;