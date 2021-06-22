import React, {useEffect, useContext, useState} from 'react';
import {View, Text, Pressable, StyleSheet, Button} from "react-native";

import FinishModal from '../components/FinishModal';
import DetailsModal from '../components/DetailsModal';

import AuthContext from '../utils/AuthContext';
import ItemsContext from '../utils/ItemsContext';
import appStyles from '../styles/appStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SessionContext from '../utils/SessionContext';

function FinishOpScreen({navigation}) {
    const {userSession} = useContext(AuthContext);
    
    const [recuperado, setRecuperado] =  useState(null);
    //const [finishModalVisible, setFinishModalVisible] = useState(false);
    //const [detailModalVisible, setDetailModalVisible] = useState(false);


    useEffect(()=>{
      let isCancelled=false;

      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(userSession)
          if(!isCancelled){
            const toSet = jsonValue != null ? JSON.parse(jsonValue) : null;
            setRecuperado(toSet);
          }
          
        } catch(e) {
          if(!isCancelled){
            console.log("errorrrr", e);
          }
        }
      }
      
      getData();
      //cuando desmonta setea isCancelled a true, entonces lo de getData no me jode el state
      return () => {
        isCancelled = true;
      };
    },[]);
    
    if(!recuperado){
      return <Text> Espere por favor...</Text>
    }else{
      /* console.log(recuperado); */
      const total = recuperado.shopState.reduce((subt, art)=>{
        return subt + art.value * art.price;
      },0); 
      return(
        <View style={styles.centeredView}>
                  <Text>Ya cargue, tenes que pagar {total}</Text>
        </View>
        
      )
    }
  
    
    
    /* return (
        <View style={styles.centeredView}>
            
            <FinishModal finishModalVisible={finishModalVisible} setFinishModalVisible={setFinishModalVisible} total={total}/>
            <DetailsModal detailModalVisible={detailModalVisible} setDetailModalVisible={setDetailModalVisible} total={total}/>
            
            <Text style={styles.mainInfo}>{total==0?"Aun no tenes nada en tu carrito":`Tu compra suma $${total}`}</Text>
            
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => console.log("what")}
            >
                <Text style={styles.textStyle}>Ver Detalle</Text>
            </Pressable>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => console.log("what") }
            >
                <Text style={styles.textStyle}>Confirmar Pago</Text>
            </Pressable>

        </View>
    ); */
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
/* const pruebaStorage = () => {

      console.log("Prueba en otro lugar");
      AsyncStorage.getItem("prueba")
      .then(response => console.log(response))
      .catch(err=>console.log("Error => ", err));
    } */
    /* <Button title="prueba de storage" onPress={pruebaStorage}/> */