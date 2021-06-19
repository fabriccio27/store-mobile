import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import MapView from "react-native-maps";

const API_KEY = "AIzaSyD7ac3d71eONAlvhJqDnhGfIt6depKPyQM";
const URL = `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

// plotting points
export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsPointsOfInterest={false}
        showsUserLocation
        followUserLocation
      >
        <MapView.Marker
          title="Duff Brewery"
          description="Duff beer for me, Duff beer for you"
          coordinate={{
            latitude: 43.8418728,
            longitude: -79.086082
          }}
        />
        <MapView.Marker
          title="Pawtucket Brewery"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 43.8401328,
            longitude: -79.085407
          }}
        />
      </MapView>
    </View>
  );
}


// what's around me
// export default () => (
//   <View style={styles.container}>
//     <MapView style={styles.mapView} showsUserLocation followUserLocation />
//   </View>
// );

// where am i
// export default function WhereAmI() {
//   const [address, setAddress] = useState("loading...");
//   const [longitude, setLongitude] = useState();
//   const [latitude, setLatitude] = useState();

//   useEffect(() => {
//     function setPosition({ coords: { latitude, longitude } }) {
//       setLongitude(longitude);
//       setLatitude(latitude);
//       fetch(`${URL}${latitude},${longitude}`)
//         .then(
//           (resp) => resp.json(),
//           (e) => console.error(e)
//         )
//         .then(({ results }) => {
//          // setAddress();
//           setAddress(results[0].formatted_address);
//         });
//     }

//     navigator.geolocation.getCurrentPosition(setPosition);

//     let watcher = navigator.geolocation.watchPosition(
//       setPosition,
//       (err) => console.error(err),
//       { enableHighAccuracy: true }
//     );

//     return () => {
//       navigator.geolocation.clearWatch(watcher);
//     };
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Address: {address}</Text>
//       <Text style={styles.label}>Latitude: {latitude}</Text>
//       <Text style={styles.label}>Longitude: {longitude}</Text>
//     </View>
//   );
// }


// plotting overlays

// const ipaRegion = {
//   coordinates: [
//     { latitude: 43.8486744, longitude: -79.0695283 },
//     { latitude: 43.8537168, longitude: -79.0700046 },
//     { latitude: 43.8518394, longitude: -79.0725697 },
//     { latitude: 43.8481651, longitude: -79.0716377 },
//     { latitude: 43.8486744, longitude: -79.0695283 }
//   ],
//   strokeColor: "coral",
//   strokeWidth: 4
// };

// const stoutRegion = {
//   coordinates: [
//     { latitude: 43.8486744, longitude: -79.0693283 },
//     { latitude: 43.8517168, longitude: -79.0710046 },
//     { latitude: 43.8518394, longitude: -79.0715697 },
//     { latitude: 43.8491651, longitude: -79.0716377 },
//     { latitude: 43.8486744, longitude: -79.0693283 }
//   ],
//   strokeColor: "firebrick",
//   strokeWidth: 4
// };

// export default function PlottingOverlays() {
//   const [ipaStyles, setIpaStyles] = useState([styles.ipaText, styles.boldText]);
//   const [stoutStyles, setStoutStyles] = useState([styles.stoutText]);
//   const [overlays, setOverlays] = useState([ipaRegion]);

//   function onClickIpa() {
//     setIpaStyles([...ipaStyles, styles.boldText]);
//     setStoutStyles([stoutStyles[0]]);
//     setOverlays([ipaRegion]);
//   }

//   function onClickStout() {
//     setStoutStyles([...stoutStyles, styles.boldText]);
//     setIpaStyles([ipaStyles[0]]);
//     setOverlays([stoutRegion]);
//   }

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={ipaStyles} onPress={onClickIpa}>
//           IPA Fans
//         </Text>
//         <Text style={stoutStyles} onPress={onClickStout}>
//           Stout Fans
//         </Text>
//       </View>
//       <MapView
//         style={styles.mapView}
//         showsPointsOfInterest={false}
//         showsUserLocation
//         followUserLocation
//       >
//         {overlays.map((v, i) => (
//           <MapView.Polygon
//             key={i}
//             coordinates={v.coordinates}
//             strokeColor={v.strokeColor}
//             strokeWidth={v.strokeWidth}
//           />
//         ))}
//       </MapView>
//     </View>
//   );
// }
