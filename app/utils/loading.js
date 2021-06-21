import React, { useState, useEffect } from "react";
import { View, ActivityIndicator,Text } from "react-native";
import styles from "../appStyles";

//esto es un funcion de orden superior, devuelve un componente envuelto.
//la promesa que tiene en props, viene de lo que hice en el appContainer cuando cree el stack
//el spinner no se esta mostrando => es un bug de android que hay que especificarle color al ActivityIndicator
export default function loading(Wrapped) {
    return function LoadingWrapper(props) {

        const [loading, setLoading] = useState(true);

        useEffect(() => {
            //cuando cumple la promesa rechazando o resolviendo me setea loading a false
            //como es async, llega a devolver el componente con el View, Text y ActivityIndicator
            props.promise.then(() => setLoading(false), () => setLoading(false));
        },[]);

        if (loading) {
            return (
                <View style={styles.container}>
                    <Text style={{color:"#2383a2", fontSize:20}}>Cargando...</Text>
                    <ActivityIndicator size="large" color="#2383a2" />
                </View>
            );
        } else {
            return <Wrapped {...props} />;
        }
    };
}