import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from "./Home";
import Settings from "./Settings";

export default createAppContainer (
  createStackNavigator({Home, Settings}, {initialRouteName:"Home"})
);


/* 
export default function App() {
    
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
}); */

/* 
Para cambiar el entry point de la app tengo que cambiar el componente registrado. Para eso voy a node_modules/expo/AppEntry.js
Es lo que esta indicado en package.json

import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from '../../App';

registerRootComponent(App); */

/* 
<View style={styles.container}>
      <Text>Hola Mundo! </Text>
      <TouchableOpacity onPress={()=>Alert.alert("Titulo", "mensajinho")}>
         a Alert.alert, le puedo pasar un 3er parametro que es un array de hasta 3 botones, cada uno con su onPress
        { text: "OK", onPress: () => console.log("OK Pressed")}
        <Image 
          source={require("./assets/favicon.png")} 
          style={styles.image} 
          blurRadius={5}
          fadeDuration={2000}
        />

      </TouchableOpacity>
      
      <StatusBar style="auto" />
</View>  */