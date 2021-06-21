import React, {useContext} from 'react';
import {Image,TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";

import AuthContext from '../utils/AuthContext';

/* withNavigation es como un connect de redux, en lugar de conectar a state, 
me da acceso a navigation para componentes que no son screen */

function LogoutButton({navigation}) {

    const {setAuth} = useContext(AuthContext);

    function handleLogout(){
        setAuth(false);
        navigation.navigate("AuthLoading")
    }
    return(
        <TouchableOpacity onPress={handleLogout}>
            <Image source={require("../assets/exit.png")} style={{width:30, height:30, marginLeft:10, padding:10}} />
        </TouchableOpacity>
        
    )
}

export default withNavigation(LogoutButton);