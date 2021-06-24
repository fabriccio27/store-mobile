import React, {useState, useEffect} from 'react';
import  {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from "../components/Input";
import appStyles from "../styles/appStyles";
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import hashFunction from "../utils/hashFunction";

function RegisterScreen({navigation}) {
    // state
    const [username, setUsername] = useState("");
    const [city,setCity] = useState("");
    const [postal,setPostal] = useState("");

    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const [psMatch, setPsMatch] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true); 
    
    //hooks de efectos
    useEffect(()=>{
        checkEmail();
    },[email]);

    useEffect(()=>{
    
        if (psMatch && validEmail && username!=="" && city!=="" && postal!==""){
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
    
    // JSX que se va a renderizar segun condicional
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
            city,
            postal,
            shopState:[
                
            ]
        };
        const userHash = hashFunction(username.trim()+password.trim()).toString();
        
        // checkear que el hash no esté registrado ya

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
        <View style={{flex:1,height:"100%", backgroundColor:"dodgerblue"}}>
            <ImageBackground source={require("../assets/fillOutForm.jpeg")} style={appStyles.imageRegister}>
            <ScrollView contentContainerStyle={appStyles.contentContainer}>  

                    <Input label="Registra tu nombre de usuario:" onChangeText={(user) => setUsername(user)}/>
                    <Input label="Email:" onChangeText={(em) => setEmail(em)} />
                    <Input label="Ciudad:" onChangeText={(em) => setCity(em)} />
                    <Input label="Codigo Postal:" onChangeText={(em) => setPostal(em)} />
                    <Input label="Password" secureTextEntry onChangeText={(ps) => setPassword(ps)} onEndEditing={checkPassword} />
                    <Input label="Confirmar Password" secureTextEntry onChangeText={(rps)=>setRepeatPassword(rps)}  onEndEditing={checkPassword} />

                    {psMatch?<PassMatch/>:<NoPassMatch/>}
                  
                    <TouchableOpacity disabled={buttonDisabled} onPress={submitRegister}>
                        <Text 
                            style={buttonDisabled?(appStyles.confirmRegisterButton):[appStyles.confirmRegisterButton,{backgroundColor:"#241c1b"}]}
                        >
                            Confirmar
                        </Text>
                    </TouchableOpacity>
                
            
            </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default RegisterScreen;