import React, {useContext} from 'react';
import {View, /* Modal,  */Image, Text, Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import appStyles from '../styles/appStyles';
import imagesTable from "../utils/imagesHashtable"
import AuthContext from "../utils/AuthContext";
import BriefLoading from './BriefLoading';
import SessionContext from "../utils/SessionContext";
/* import modalStyles from '../styles/modalStyles'; */

function Item({item}) {

    //ver que esto deberia tener un display tipo row con varios Text adentro
    //probe con row y no queda muy bien, creo que tendria que armar una card
    const {userSession} = useContext(AuthContext);
    const {recuperado} = useContext(SessionContext);
    
    if(!recuperado){
        return <BriefLoading />;
    }
    //conservar inmutabilidad
    //modificar selectivamente el state
    const recCopy = {...recuperado};
    const idx = recuperado.shopState.indexOf(item);

    //tengo que escribir al AsyncStorage creo, esto creo que tendria que estar en ItemsScreen
    const handleInc = ()=>{
        recCopy.shopState[idx].value++;
        /* tengo que rescribir todo, o solo el shopState */
        AsyncStorage.setItem(userSession, JSON.stringify(recCopy));
    }
    const handleDec = ()=>{
        recCopy.shopState[idx].value--;
        AsyncStorage.setItem(userSession, JSON.stringify(recCopy));
    }
 
    return (
        <View style={appStyles.listItem}>
            
            <View style={appStyles.upperCardSection}>
                <Image source={imagesTable[item.key]} style={{width:120, height:120}}/>
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

export default Item;