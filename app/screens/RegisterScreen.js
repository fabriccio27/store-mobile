import React, {useState} from 'react';
import  {View, Text} from 'react-native';
import Input from "../components/Input";


function RegisterScreen() {
    const [changedText, setChangedText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View>
            <Text>Register Screen babyyy</Text>
            <Input label="Registra tu nombre de usuario:" />
            <Input label="Email:" />
            <Input label="Password" secureTextEntry onChangeText={(ps)=>setPassword(ps)}/>
            <Input label="Confirmar Password" secureTextEntry />
            
            
            <Input
                label="Input Events:"
                onChangeText={e => {
                    setChangedText(e);
                }}
                onSubmitEditing={e => {
                    setSubmittedText(e.nativeEvent.text);
                }}
                onFocus={() => {
                    setChangedText("");
                    setSubmittedText("");
                }}
                
            
            />
            <Text>Password: {password}</Text>
            <Text>Changed: {changedText}</Text>
            <Text>Submitted: {submittedText}</Text>
        </View>
    );
}
/* este onFocus me limpia los Text de abajo */
export default RegisterScreen;