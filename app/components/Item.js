import React, {useContext} from 'react';
import {View, Text, Alert} from "react-native";
import appStyles from '../styles/appStyles';
import AuthContext from "../utils/AuthContext";

function Item({item}) {
    //ver que esto deberia tener un display tipo row con varios Text adentro
    //probe con row y no queda muy bien, creo que tendria que armar una card
    const {articulos, setArticulos} = useContext(AuthContext);
    
    //conservar inmutabilidad
    //modificar selectivamente el state
    const artCopy = [...articulos];
    const idx = articulos.indexOf(item);

    const handleInc = ()=>{
        artCopy[idx].value++;
        setArticulos(artCopy);
    }
    const handleDec = ()=>{
        artCopy[idx].value--;
        setArticulos(artCopy);
    }

    return (
        <View style={appStyles.listItem}>
            <View style={appStyles.upperCardSection}>
                <Text style={appStyles.itemTitle}>{item.description}</Text>
                <Text style={appStyles.itemPrice}>${item.price}</Text>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                <Text style={appStyles.amountButton} onPress={()=>handleInc()}>+</Text>
                <Text style={appStyles.amountNumber}>{item.value}</Text>
                {item.value==0?(
                    <Text style={appStyles.amountButton} onPress={()=>Alert.alert("Advertencia","No se puede quitar mas",[{text:"OK", style:"cancel"}] )}>-</Text>
                ):(
                    <Text style={appStyles.amountButton} onPress={()=>handleDec(item.id)}>-</Text>
                )}
            </View>
        </View>
    );
}

export default Item;