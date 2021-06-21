import React, {useState,useEffect,useContext} from 'react';
import {View, Text, Button, ImageBackground, StyleSheet} from "react-native";

import appStyles from '../appStyles';
import Input from "../components/Input";
import registeredUsers from "../registeredUsers";
import AuthContext from '../utils/AuthContext';


//este no deberia ir wrappeado porque en esta instancia no estoy buscando ningun recurso
const LoginScreen = ({navigation})=> {

    const {testContext,isAuth,setAuth} = useContext(AuthContext);

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