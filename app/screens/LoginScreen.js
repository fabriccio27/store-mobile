import React, {useState,useEffect,useContext} from 'react';
import {View, Text, Button, ImageBackground} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import hashFunction from "../utils/hashFunction";

import appStyles from '../styles/appStyles';
import Input from "../components/Input";
import registeredUsers from "../registeredUsers";
import AuthContext from '../utils/AuthContext';


//este no deberia ir wrappeado porque en esta instancia no estoy buscando ningun recurso
const LoginScreen = ({navigation})=> {

    const {testContext,isAuth,setAuth,setUserSession} = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    /* const [isAuth, setAuth] = useState(false); */
    
    useEffect(()=>{
        checkLogin();
    },[username,password]);

    const checkLogin =()=>{
        if (username.length>0 && password.length>0){
            //includes checkea igualdad de referencia, por eso si comparo username y password con info hardcodeada da false
            registeredUsers.some(usr=>usr.username==username && usr.password==password)?setAuth(true):setAuth(false);
        }else{
            setAuth(false);
        }
    };

    const checkLoginAlt=()=>{
        if (username.trim().length!==0 && password.trim().length!==0){
            const generatedHash = hashFunction(username.trim() + password.trim()).toString();
            AsyncStorage.getItem(generatedHash)
            .then(resp=>{
                if (!resp) {
                    navigation.navigate("NoAuth");
                } 
                /* console.log("Leido de async storage: ", resp) */
                /* si esta todo bien, setear Auth a true, y quien esta loggeado por el hash, luego navegar a Items  */
                setAuth(true);
                setUserSession(generatedHash);
                navigation.navigate("Items");
            })
            .catch(err=>console.log("Error en loginalt: ", err));
        } else {
            navigation.navigate("NoAuth");
        }
    }
    /* console.log(`is authenticated? ${isAuth}`); */
    return (
        <View style={appStyles.container}>
            <ImageBackground source={require("../assets/bikeWall.jpg")} style={appStyles.backgroundImage}>
                <Text style={appStyles.titleOrHeader}>Es bueno tenerte de vuelta</Text>
                <Input label="Usuario" onChangeText={(usr)=>setUsername(usr)}/>
                <Input label="Password" secureTextEntry onChangeText={(ps)=>setPassword(ps)}/>
                {/* puse el title dentro de navigate para ver si modificaba, y si */}
                <Button 
                    title="Ingresar" 
                    onPress={() => isAuth? navigation.navigate("Items"):navigation.navigate("NoAuth")} 
                    color="#241c1b"
                />
                <Button title="Login Alt" onPress={checkLoginAlt}/>
            </ImageBackground>
            
            {/* <Button 
                title="Testear" 
                onPress={testContext} 
                color="#241c1b"
            /> */}
            {/* si no hay usuario llevar a screen de credenciales invalidas, si hay levantar mostrar loading y redirigir */}
        </View>
    );
};


LoginScreen.navigationOptions={
    title:"Iniciar sesion"
};

export default LoginScreen;