import React, {useState, useEffect} from 'react';
import  {View, Text, Button} from 'react-native';

import Input from "../components/Input";
import styles from "../appStyles";


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
        console.log("is valid email?", validEmail);
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
        console.log("We got to check the password");
        if (password === repeatpassword){
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
    
    return (
        <View style={styles.container}>
            <Input label="Registra tu nombre de usuario:" onChangeText={(user) => setUsername(user)}/>
            <Input label="Email:" onChangeText={(em) => setEmail(em)} />
            <Input label="Password" secureTextEntry onChangeText={(ps) => setPassword(ps)} onEndEditing={checkPassword} />
            <Input label="Confirmar Password" secureTextEntry onChangeText={(rps)=>setRepeatPassword(rps)}  onEndEditing={checkPassword} />
            
            <Text>They match?{psMatch?"YAS":"Nope"}</Text>
            {/* aca por ahi tendria que pasar un objeto que diga que estoy autenticado, y que use eso para 
            modelar que hace apretar back */}
            <Button title="Confirmar" disabled={buttonDisabled} onPress={()=>navigation.navigate("Login")} />
            
        </View>
    );
}
export default RegisterScreen;