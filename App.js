import React from 'react';
import { StyleSheet} from 'react-native';
import AppContainer from "./app/components/AppContainer";

export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
