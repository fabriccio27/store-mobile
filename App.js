import React, {useState} from 'react';
import AppContainer from "./app/components/AppContainer";
import AppRouter from './app/utils/AppRouter';
import AuthContext from "./app/utils/AuthContext";
import availableItems from "./app/availableItems";

export default function App() {
  const [isAuth, setAuth] = useState(false);
  const [articulos,setArticulos] = useState(availableItems);
  const testContext = () => console.log("I'm working!");
  //no es lo mejor cargar todo de entrada, ver si se puede mejorar despues
  return (
    <AuthContext.Provider value={{testContext,isAuth,setAuth,articulos,setArticulos}}>
      <AppRouter/>
    </AuthContext.Provider>
  );
}

