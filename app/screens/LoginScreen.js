import React, {useState, useContext} from 'react';
import {View, Text, Button, ImageBackground} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import hashFunction from "../utils/hashFunction";

import appStyles from '../styles/appStyles';
import Input from "../components/Input";
import AuthContext from '../utils/AuthContext';


//este no deberia ir wrappeado porque en esta instancia no estoy buscando ningun recurso
const LoginScreen = ({navigation})=> {

    const {testContext,isAuth,setAuth,setUserSession} = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    

    const checkLoginAlt=()=>{
        if (username.trim().length!==0 && password.trim().length!==0){
            
            const generatedHash = hashFunction(username.trim() + password.trim()).toString();
            AsyncStorage.getItem(generatedHash)
            .then(resp=>{
                //no andaba porque no tenia el return, y seguia el flujo de ejecucion
                if (!resp) {
                    return navigation.navigate("NoAuth");
                } 
                /* si esta todo bien, setear Auth a true, y quien esta loggeado por el hash, luego navegar a Items  */
                setAuth(true);
                setUserSession(generatedHash);
                //aca ya podria setear info a state, y no fetcheo en ItemsScreen, ver despues...
                navigation.navigate("Items");
            })
            .catch(err=>console.log("Error en loginalt: ", err));
        } else {
            return navigation.navigate("NoAuth");
        }
    }

    return (
        <View style={appStyles.container}>
            <ImageBackground source={require("../assets/bikeWall.jpg")} style={appStyles.backgroundImage}>
                <Text style={appStyles.titleOrHeader}>Es bueno tenerte de vuelta</Text>
                <Input label="Usuario" onChangeText={(usr)=>setUsername(usr)}/>
                <Input label="Password" secureTextEntry onChangeText={(ps)=>setPassword(ps)}/>
                {/* puse el title dentro de navigate para ver si modificaba, y si */}                
                <Button title="Ingresar" onPress={checkLoginAlt} color="#241c1b"/>
            </ImageBackground>
            
            {/* <Button 
                title="Testear" 
                onPress={testContext} 
                color="#241c1b"
            /> */}
        </View>
    );
};


LoginScreen.navigationOptions={
    title:"Iniciar sesion"
};

export default LoginScreen;