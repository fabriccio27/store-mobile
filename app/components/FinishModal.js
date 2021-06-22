import React from "react";
import {Modal, Text, Pressable, View} from "react-native";
import modalStyles from "../styles/modalStyles";

const FinishModal = ({finishModalVisible,setFinishModalVisible, total, showFinishModal})=>{
  
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={finishModalVisible}
            onRequestClose={() => {
              setFinishModalVisible(!finishModalVisible);
            }}
        >
            <View style={modalStyles.centeredView}>
              <View style={modalStyles.modalView}>
                <Text style={modalStyles.modalText}>Estas por completar pago de ${total}</Text>
                <Pressable
                  style={[modalStyles.button, modalStyles.buttonClose]}
                  onPress={showFinishModal}
                >
                  <Text style={modalStyles.textStyle}>Si</Text>
                </Pressable>
              </View>
            </View>
        </Modal>
    )
};

export default FinishModal;