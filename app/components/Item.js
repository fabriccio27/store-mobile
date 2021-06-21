import React, {useContext} from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import appStyles from '../appStyles';
import ItemsContext from "../utils/ItemsContext";

function Item({item}) {
    //ver que esto deberia tener un display tipo row con varios Text adentro
    //probe con row y no queda muy bien, creo que tendria que armar una card
    const {articulos, setArticulos} = useContext(ItemsContext);
    
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
            <Text style={styles.itemTitle}>{item.description}</Text>
            <Text>${item.price}</Text>
            <Text>Llevando:{item.value}</Text>
            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                <Text style={styles.amountButton} onPress={()=>handleInc()}>+</Text>
                {item.value==0?(
                    <Text style={styles.amountButton} onPress={()=>Alert.alert("Advertencia","No se puede quitar mas",[{text:"OK", style:"cancel"}] )}>-</Text>
                ):(
                    <Text style={styles.amountButton} onPress={()=>handleDec(item.id)}>-</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    amountButton:{
        
        backgroundColor:"lightblue",
        borderRadius:20,
        color:"white",
        fontSize:20,
        margin:5,
        padding:10,
        textAlign:"center",
        width:40
    },
    itemTitle:{
        fontWeight:"bold",
        fontSize:20
    }
})


export default Item;