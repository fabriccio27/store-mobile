import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import styles from "./styles";

// What's around me
//export default () => (
  export default function App() {
    return(
      
      <View style={styles.container}>
        <MapView style={styles.mapView} showsUserLocation followUserLocation />
      </View>

    )
  }

// export default function App() {
//   <View style={styles.container}>
//       <MapView
//     initialRegion={{
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }}
//   />
//   </View>
// }
