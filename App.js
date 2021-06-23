import React, {useState} from 'react';

import AppRouter from './app/utils/AppRouter';
import AuthContext from "./app/utils/AuthContext";
import availableItems from "./app/availableItems";

export default function App() {
  //esta variable la uso para saber si voy a navigator con screens de usuarios autenticados o no
  const [isAuth, setAuth] = useState(false);
  //esto es el hash que genere en el registro
  const [userSession, setUserSession] = useState("");
  /* const [articulos,setArticulos] = useState(availableItems); ya no esta hardcodeado, comentado afuera */

  //esta funcion es para usarlo en cualquier lugar a ver si esta andando bien el provider de contexto
  const testContext = () => console.log("I'm working!");
  //no es lo mejor cargar todo de entrada o si?, ver si se puede mejorar despues
  return (
    <AuthContext.Provider value={{testContext,isAuth,setAuth,/* articulos,setArticulos, */ userSession, setUserSession}}>
      <AppRouter/>
    </AuthContext.Provider>
  );
}

