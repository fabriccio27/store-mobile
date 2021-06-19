import React, {useState} from 'react';
import  {View, Text} from 'react-native';
import Input from "../components/Input";


function RegisterScreen() {
    const [changedText, setChangedText] = useState("");
    const [submittedText, setSubmittedText] = useState("");

    return (
        <View>
            <Text>Register Screen babyyy</Text>
            <Input label="Basic Text Input:" />
            <Input label="Password Input:" secureTextEntry />
            
            
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
            <Text>Changed: {changedText}</Text>
            <Text>Submitted: {submittedText}</Text>
        </View>
    );
}
/* este onFocus me limpia los Text de abajo */
export default RegisterScreen;