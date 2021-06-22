import React, {useEffect, useContext, useState} from 'react';
import {View, Text, Pressable, StyleSheet, Button} from "react-native";

import FinishModal from '../components/FinishModal';
import DetailsModal from '../components/DetailsModal';

import AuthContext from '../utils/AuthContext';
import ItemsContext from '../utils/ItemsContext';
import appStyles from '../styles/appStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function FinishOpScreen({navigation}) {
    const {articulos} = useContext(AuthContext);
    const [finishModalVisible, setFinishModalVisible] = useState(false);
    const [detailModalVisible, setDetailModalVisible] = useState(false);

    /* console.log(articulos) */
    const total = articulos.reduce((subt, art)=>{
        return subt + art.value * art.price;
    },0);

    const pruebaStorage = () => {

      console.log("Prueba en otro lugar");
      AsyncStorage.getItem("prueba")
      .then(response => console.log(response))
      .catch(err=>console.log("Error => ", err));
    }
    
    return (
        <View style={styles.centeredView}>
            
            <FinishModal finishModalVisible={finishModalVisible} setFinishModalVisible={setFinishModalVisible} total={total}/>
            <DetailsModal detailModalVisible={detailModalVisible} setDetailModalVisible={setDetailModalVisible} total={total}/>
            
            <Text style={styles.mainInfo}>{total==0?"Aun no tenes nada en tu carrito":`Tu compra suma $${total}`}</Text>
            
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setDetailModalVisible(true)}
            >
                <Text style={styles.textStyle}>Ver Detalle</Text>
            </Pressable>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setFinishModalVisible(true)}
            >
                <Text style={styles.textStyle}>Confirmar Pago</Text>
            </Pressable>

            <Button title="prueba de storage" onPress={pruebaStorage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainInfo:{
      color:"white",
      fontWeight:"bold",
      fontSize:20,
      margin:10,
      padding:10
    },  
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        /* marginTop: 22, */
        backgroundColor:"#8c9ba0"
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        marginVertical:10,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#2c5753",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
export default FinishOpScreen;