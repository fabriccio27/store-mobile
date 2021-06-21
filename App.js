import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import AppContainer from "./app/components/AppContainer";
import AppRouter from './app/utils/AppRouter';
import AuthContext from "./app/utils/AuthContext";

export default function App() {
  const [isAuth, setAuth] = useState(false);
  const testContext = () => console.log("I'm working!");
  
  return (
    <AuthContext.Provider value={{testContext,isAuth,setAuth}}>
      <AppRouter/>
      {/* <AppContainer screenProps={isAuth}/> */}
    </AuthContext.Provider>
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
