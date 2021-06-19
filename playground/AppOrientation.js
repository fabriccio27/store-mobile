import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useWindowDimensions, useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
// dimensiones
export default function App() {
    console.log(Dimensions.get('screen'));
    console.log(useDimensions());
    console.log(useDeviceOrientation());

   const {landscape} =useDeviceOrientation();

  return (
    <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%', 
        height: landscape ? '100%' : '30%'
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