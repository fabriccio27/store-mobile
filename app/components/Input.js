import React from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View } from "react-native";
import styles from "../appStyles";

function Input(props) {
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>{props.label}</Text>
            <TextInput style={styles.textInput} {...props} />
        </View>
    );
}

Input.propTypes = {
    label: PropTypes.string
};

export default Input;