import React, {useState,useEffect} from 'react';
import {View, Text, Button} from "react-native";
import appStyles from '../appStyles';
import Input from "../components/Input";
import registeredUsers from "../registeredUsers";
import loading from "../utils/loading";

//este no deberia ir wrappeado porque en esta instancia no estoy buscando ningun recurso
const LoginScreen = ({navigation})=> {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setAuth] = useState(false);
    
    useEffect(()=>{
        checkLogin();
    },[username,password]);

    const checkLogin =()=>{
        if (username.length>0 && password.length>0){
            //includes checkea igual de referencia, por eso si comparo username y password con info hardcodeada da false
            registeredUsers.some(usr=>usr.username==username && usr.password==password)?setAuth(true):setAuth(false);
        }else{
            setAuth(false);
            //si no hubo match levantar el modal
        }
    };
    /* console.log(`is authenticated? ${isAuth}`); */
    return (
        <View style={appStyles.container}>
            <Text>Es bueno tenerte de vuelta</Text>
            <Input label="Usuario" onChangeText={(usr)=>setUsername(usr)}/>
            <Input label="Password" secureTextEntry onChangeText={(ps)=>setPassword(ps)}/>
            <Button title="Ingresar" onPress={()=>isAuth?navigation.navigate("Items"):navigation.navigate("NoAuth")}/>
            {/* si no hay usuario levantar modal con mensaje, si hay levantar modal con carga y redirigir */}
        </View>
    );
};

export default LoginScreen;