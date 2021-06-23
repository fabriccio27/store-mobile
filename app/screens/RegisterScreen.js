import React, {useState, useEffect} from 'react';
import  {View, Text, Button, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from "../components/Input";
import appStyles from "../styles/appStyles";
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import hashFunction from "../utils/hashFunction";

function RegisterScreen({navigation}) {
    // state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const [psMatch, setPsMatch] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true); 
    
    //hooks de efectos
    useEffect(()=>{
        /* console.log("is valid email?", validEmail); */
        checkEmail();
    },[email]);

    useEffect(()=>{
    
        if (psMatch && validEmail && username!==""){
            setButtonDisabled(false); // o sea que lo habilito
        }else{
            setButtonDisabled(true);
        }
        
    },[psMatch,validEmail,username]);
    
    //esto lo ejecuto cuando termino de completar?
    const checkPassword = () =>{
        
        if (password === repeatpassword && password.trim()!==""){
            /* console.log(`${password} and ${repeatpassword}`); */
            setPsMatch(true);
        }else{
            setPsMatch(false);
        }
    };
    //validacion precaria de email
    const checkEmail = () =>{
        const isEmail = /^(\w)+(\.)*(\w)*@(\w)+(\.)\w{2,}$/.test(email);
        setValidEmail(isEmail);
    };
    
    const PassMatch = () => {
        return <Text style={appStyles.greenMessage}>Password coinciden!</Text>
    };
    const NoPassMatch = () => {
        return <Text style={appStyles.pendingMessage}>Los campos de password aun no coinciden</Text>
    };

    const submitRegister = () => {
        const userInfo = {
            username,
            email,
            password,
            shopState:[
                {key:"1", id: 1, value: 0, description:"Auriculares", price:120 },
                {key:"2", id: 2, value: 0, description:"Almohada Viscoelastica", price:250 },
                {key:"3", id: 3, value: 0, description:"Lector e-books", price:380 },
                {key:"4", id: 4, value: 0, description:"Afeitadora", price:170 }
            ]
        };
        const userHash = hashFunction(username.trim()+password.trim()).toString();
        
        AsyncStorage.setItem(userHash, JSON.stringify(userInfo))
        .then(()=>console.log("Registrado!"))
        .then(()=>navigation.navigate("Login"))
        .catch(err=>console.log("Paso esto tratando de escribir registro: ", err));

        /* 
        escribir a async-storage con key igual hash de username y password
        value seria userInfo en json
        */
        console.log(JSON.stringify(userInfo));
        
    }

    return (
        <View style={appStyles.container}>
            <ImageBackground source={require("../assets/fillOutForm.jpeg")} style={appStyles.backgroundImage}>

            <Input label="Registra tu nombre de usuario:" onChangeText={(user) => setUsername(user)}/>
            <Input label="Email:" onChangeText={(em) => setEmail(em)} />
            <Input label="Password" secureTextEntry onChangeText={(ps) => setPassword(ps)} onEndEditing={checkPassword} />
            <Input label="Confirmar Password" secureTextEntry onChangeText={(rps)=>setRepeatPassword(rps)}  onEndEditing={checkPassword} />
            
            {psMatch?<PassMatch/>:<NoPassMatch/>}
            {/* aca por ahi tendria que pasar un objeto que diga que estoy autenticado, y que use eso para 
            modelar que hace apretar back */}
            {/* aca tengo que ver si exporto un json  */}
            {/* <Button title="Printear info" onPress={submitRegister}/> */}
            <Button title="Confirmar" disabled={buttonDisabled} onPress={submitRegister} color="#241c1b" />
            </ImageBackground>
            
        </View>
    );
}

export default RegisterScreen;