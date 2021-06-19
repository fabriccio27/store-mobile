import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

console.log("holaaaaaaaaaaa");
// SafeAreaView --> unicamente para IOS
const handlePress=()=>console.log("texto clickeado")

export default function App() {
  return (
    <View style={styles.container}>
      <Button
      color="green"
      title="ClickMe"
      onPress={()=> alert('boton verde clicked')}
      > </Button>
       <Button
      color="orange"
      title="ClickMe"
      onPress={()=> alert('boton naranja clicked')}
      > </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});