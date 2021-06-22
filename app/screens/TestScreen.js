import React, {useState,useContext} from 'react';
import {View, Text, Button, ImageBackground} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


import hashFunction from "../utils/hashFunction";
import appStyles from '../styles/appStyles';
import Input from "../components/Input";

import AuthContext from '../utils/AuthContext';




//este no deberia ir wrappeado porque en esta instancia no estoy buscando ningun recurso
const TestScreen = ({navigation})=> {

    const {testContext,isAuth,setAuth} = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [city, setCity] = useState("");
    
    
   
    /* 3765918647984468 */
    let userHash;
    const escribirStorage=()=>{
        console.log("working on escribir");
        
        userHash = hashFunction(username.trim()+city.trim()).toString();
        
        const toWrite= {
            username,
            city
        };

        AsyncStorage.setItem(userHash.toString(), JSON.stringify(toWrite))
        .then((resp)=>console.log("Escrito lince"));
    };
    const leerStorage=()=>{
        console.log("working on leer");
        AsyncStorage.getItem(userHash)
        .then(res=>console.log(`Respuesta ${res}, de tipo ${typeof(JSON.parse(res))}`))
        .catch(err=>console.log("Error al leer: ", err));
        
    };

    return (
        <View style={appStyles.container}>
            <ImageBackground source={require("../assets/bikeWall.jpg")} style={appStyles.backgroundImage}>
                <Text style={appStyles.titleOrHeader}>TESTEANDO</Text>
                <Input label="Usuario" onChangeText={(usr)=>setUsername(usr)}/>
                <Input label="Ciudad" onChangeText={(ct)=>setCity(ct)}/>
                {/* puse el title dentro de navigate para ver si modificaba, y si */}

                <Button title="ESCRIBIR" onPress={escribirStorage}/>
                <Button title="LEER" onPress={leerStorage}/>

                <Button 
                    title="Ingresar" 
                    onPress={() => isAuth? navigation.navigate("Items"):navigation.navigate("NoAuth")} 
                    color="#241c1b"
                />
            </ImageBackground>
            
        </View>
    );
};


TestScreen.navigationOptions={
    title:"Pantalla de testeo"
};

export default TestScreen;