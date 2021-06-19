import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// dimensiones
export default function App() {
    console.log(Dimensions.get('screen'));
    /*
    devuelve esto
     Object {
      "fontScale": 1,
      "height": 640,
      "scale": 3,
      "width": 360,
    } */
  return (
    <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%', 
        height: 70
    }}>
      <Text>Hola Mundo! </Text>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});