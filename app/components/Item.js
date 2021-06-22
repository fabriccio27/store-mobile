import React, {useContext} from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import appStyles from '../appStyles';
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
            <View style={styles.upperCardSection}>
                <Text style={styles.itemTitle}>{item.description}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
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

const styles = StyleSheet.create({
    
    itemTitle:{
        fontWeight:"bold",
        fontSize:25,
        textAlign:"center"
    },
    upperCardSection:{
        flexDirection:"row",
        justifyContent:"center",
        marginVertical:20
    },
    itemPrice:{
        fontSize:20,
        marginLeft:10,
        paddingTop:5
    }
    
})


export default Item;