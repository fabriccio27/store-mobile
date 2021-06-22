import React, {useEffect, useContext} from 'react';
import {View, Text} from "react-native";
import AuthContext from '../utils/AuthContext';
import ItemsContext from '../utils/ItemsContext';

function FinishOpScreen({navigation}) {
    const {articulos} = useContext(AuthContext);
    console.log(articulos)
    const total = articulos.reduce((subt, art)=>{
        return subt + art.value * art.price;
    },0);
    return (
        <View>
            <Text>Tenes ${total} en tu carrito</Text>
            {/* mostrar subtotal y mock completar comprar */}
        </View>
    );
}


export default FinishOpScreen;