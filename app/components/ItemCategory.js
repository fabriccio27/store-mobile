import React, {useContext} from 'react';
import {View, Text, Alert} from "react-native";
import appStyles from '../styles/appStyles';
import AuthContext from '../utils/AuthContext';

function ItemCategory({item}) {

    const {userShopping, setUserShopping}= useContext(AuthContext)
    //tengo que encontrar el item que quiero por su id, y modificar la propiedad que quiero
    // luego tengo que stear el nuevo state acorde al cambio
    const copy =[...userShopping];
    const idx = userShopping.indexOf(item);

    const handleInc = ()=>{
        console.log("queriendo agregar");
        copy[idx].value++;
        setUserShopping(copy);
        /* 
        recCopy.shopState[idx].value++;
        AsyncStorage.setItem(userSession, JSON.stringify(recCopy)); */
    }
    const handleDec = ()=>{
        console.log("queriendo quitar");
        copy[idx].value--;
        setUserShopping(copy);
        /* recCopy.shopState[idx].value--;
        AsyncStorage.setItem(userSession, JSON.stringify(recCopy)); */
    }

    return (
        <View style={appStyles.listItem}>
            
            <View style={appStyles.upperCardSection}>
                <Text style={appStyles.itemTitle}>{item.description}</Text>
                <Text style={appStyles.itemPrice}>${item.price}</Text>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                {item.value==0?(
                    <Text style={appStyles.amountButton} onPress={()=>Alert.alert("Advertencia","No se puede quitar mas",[{text:"OK", style:"cancel"}] )}>-</Text>
                ):(
                    <Text style={appStyles.amountButton} onPress={()=>handleDec(item.id)}>-</Text>
                )}
                <Text style={appStyles.amountNumber}>{item.value}</Text>
                <Text style={appStyles.amountButton} onPress={()=>handleInc()}>+</Text>
            </View>
        </View>
    );
}

export default ItemCategory;