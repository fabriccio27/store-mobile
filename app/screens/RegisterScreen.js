import React from 'react';
import  {View, Text} from 'react-native';
import Input from "../components/Input";


function RegisterScreen() {
    return (
        <View>
            <Text>Register Screen babyyy</Text>
            <Input label="Basic Text Input:" />
            {/* <Input label="Password Input:" secureTextEntry />
            <Input label="Return Key:" returnKeyType="search" />
            <Input label="Placeholder Text:" placeholder="Search" />
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
            <Text>Submitted: {submittedText}</Text> */}
        </View>
    );
}
export default RegisterScreen;