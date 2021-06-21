import React, {useContext} from 'react';
import {Image,TouchableOpacity} from "react-native";


function LogoutButton({navigation}) {
    //no tengo acceso a navigation...
    function handleLogout(navigation){
        navigation.navigate("Auth")
    }
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("Auth")}>
            <Image source={require("../assets/exit.png")} style={{width:30, height:30, marginRight:10, padding:10}} />
        </TouchableOpacity>
        
    )
}

export default LogoutButton;