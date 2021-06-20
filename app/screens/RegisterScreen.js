import React, {useState, useEffect} from 'react';
import  {View, Text, Button} from 'react-native';
import { set } from 'react-native-reanimated';

import Input from "../components/Input";


function RegisterScreen() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [psMatch, setPsMatch] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true); 
    
    /* <Button
      color="green"
      title="ClickMe"
      onPress={()=> alert('boton verde clicked')}
      ></Button> */
    useEffect(()=>{
        console.log("is valid email?", validEmail);
        checkEmail();
    },[email]);

    useEffect(()=>{
        //tengo que refactorizar esto, esta asqueroso
        if(psMatch){
            if(validEmail){
                console.log("llegue hasta doble check");
                setButtonDisabled(false); //o sea lo habilita
            }else{
                setButtonDisabled(true);
            }
        }else{
            setButtonDisabled(true);
        }
        
    },[psMatch,validEmail]);
    const checkPassword = (ev) =>{
        console.log("We got to check the password");
        if (password === ev.nativeEvent.text && password!==""){
            console.log(`${password} and ${ev.nativeEvent.text}`);
            setPsMatch(true);
            return true;
        }else{
            setPsMatch(false);
        }
    };
    const checkEmail = () =>{
        const isEmail = /^(\w)+(\.)*(\w)*@(\w)+(\.)\w{2,}$/.test(email);
        setValidEmail(isEmail);
    };
    //tengo que hacer un checkeo de email, que verifique que tengo un xxx@xxx.xx CHECK
    //tengo que hacer un boton deshabilitado hasta que este todo en orden SEMI CHECK
    
    console.log("password matching?", psMatch);
    return (
        <View>
            <Text>Register Screen babyyy</Text>
            <Input label="Registra tu nombre de usuario:" onChangeText={(user) => setUsername(user)}/>
            <Input label="Email:" onChangeText={(em) => setEmail(em)} />
            <Input label="Password" secureTextEntry onChangeText={(ps) => setPassword(ps)}/>
            <Input label="Confirmar Password" secureTextEntry onEndEditing={(event) => checkPassword(event)} />
            
            <Text>Password: {password}</Text>
            <Text>They match?{psMatch?"YAS":"Nope"}</Text>
            <Button title="Confirmar" onPress={()=>{
                console.log("Boton de confirmar presionado.")
            }} 
            disabled={buttonDisabled}/>
            
        </View>
    );
}
/* este onFocus me limpia los Text de abajo */
export default RegisterScreen;