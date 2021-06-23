import React from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View } from "react-native";
import appStyles from "../styles/appStyles";

function Input(props) {
    
    return (
        <View style={[appStyles.textInputContainer]}>
            <Text style={appStyles.textInputLabel}>{props.label}</Text>
            <TextInput style={appStyles.textInput} maxLength={50} {...props} />
        </View>
    );
}

Input.propTypes = {
    label: PropTypes.string
};

export default Input;