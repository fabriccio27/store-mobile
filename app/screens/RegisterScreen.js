import React, {useState} from 'react';
import  {View, Text} from 'react-native';
import Input from "../components/Input";


function RegisterScreen() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [psMatch, setPsMatch] = useState(false);
    

    const checkPassword = (ev) =>{
        /* console.log(ev.nativeEvent.text); //esta regresando bien el input */
        console.log("We got to check the password");
        if (password == ev.nativeEvent.text){
            console.log(`${password} and ${ev.nativeEvent.text}`);
            setPsMatch(true);
        }
    };

    return (
        <View>
            <Text>Register Screen babyyy</Text>
            <Input label="Registra tu nombre de usuario:" onChangeText={(user) => setUsername(user)}/>
            <Input label="Email:" onChangeText={(em) => setEmail(em)}/>
            <Input label="Password" secureTextEntry onChangeText={(ps) => setPassword(ps)}/>
            <Input label="Confirmar Password" secureTextEntry onEndEditing={(event) => checkPassword(event)} />
            
            <Text>Password: {password}</Text>
            <Text>They match?{psMatch?"YAS":"Nope"}</Text>
            
        </View>
    );
}
/* este onFocus me limpia los Text de abajo */
export default RegisterScreen;