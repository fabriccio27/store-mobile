import React, {useEffect, useContext, useState} from 'react';
import {View, Text, Pressable, StyleSheet, Button} from "react-native";

import FinishModal from '../components/FinishModal';
import BriefLoading from '../components/BriefLoading';
import DetailsModal from '../components/DetailsModal';

import AuthContext from '../utils/AuthContext';

import modalStyles from '../styles/modalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';


function FinishOpScreen({navigation}) {
    const {userSession} = useContext(AuthContext);
    
    const [recuperado, setRecuperado] =  useState(null);
    const [finishModalVisible, setFinishModalVisible] = useState(false);
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
    
    const showFinishModal=()=>{
      setFinishModalVisible(!finishModalVisible);
    }
    
    if(!recuperado){
      return <BriefLoading/>
    }else{
      /* console.log(recuperado); */
      const total = recuperado.shopState.reduce((subt, art)=>{
        return subt + art.value * art.price;
      },0);

      return(
        <View style={modalStyles.centeredView}>
          <FinishModal 
            finishModalVisible={finishModalVisible} 
            setFinishModalVisible={setFinishModalVisible} 
            total={total}
            showFinishModal={showFinishModal}
            navigation={navigation}
          />
          {/* <DetailsModal detailModalVisible={detailModalVisible} setDetailModalVisible={setDetailModalVisible} total={total}/> */}
          <Text style={modalStyles.mainInfo}>{total==0?"Aun no tenes nada en tu carrito":`Tu compra suma $${total}`}</Text>
          {total!=0 && (<Pressable
                style={[modalStyles.button, modalStyles.buttonOpen]}
                onPress={showFinishModal}
            >
                <Text style={modalStyles.textStyle}>Confirmar Pago</Text>
          </Pressable>)}
        </View>

      );
    }
  
}

export default FinishOpScreen;
