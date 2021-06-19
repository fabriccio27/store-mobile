import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
// codigo original

export default function App() {
console.log(require('./assets/icon.png'));
const [count, setCount] = useState(0);
const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <Text>Hola Mundo! </Text>
      <Image source={require('./assets/icon.png')} style={styles.tinyLogo} />
            <TouchableWithoutFeedback onPress={() => console.log('imagen presionada')}>
      <Image source={{
             uri: 'https://picsum.photos/200/300'
             }} 
            style ={{
              width:200,
              height:300
                    }} 
             blurRadius={10}
             fadeDuration={1000}
      />
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
        </TouchableOpacity>
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
  tinyLogo:{
    width:50,
    height:50
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

// probar
// TouchableWithoutFeedback
// TouchableOpacity
// TouchableHighlight
// TouchableNativeFeedback