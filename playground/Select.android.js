import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";
import {Picker} from '@react-native-picker/picker';
//  npm install @react-native-picker/picker --save
export default function Select(props) {
  return (
    <View>
      <Text style={styles.pickerLabel}>{props.label}</Text>
      <Picker {...props}>
        {props.items.map(i => (
          <Picker.Item key={i.label} {...i} />
        ))}
      </Picker>
    </View>
  );
}

Select.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string
};
