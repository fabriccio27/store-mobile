import React from "react";
import {Modal, Text, Pressable, View} from "react-native";
import modalStyles from "../styles/modalStyles";
import { withNavigation } from "react-navigation";

const FinishModal = ({finishModalVisible,navigation, total, showFinishModal})=>{
  
    const handleConfirmation =()=>{
      showFinishModal();
      navigation.navigate("Completed");
    }
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={finishModalVisible}
            onRequestClose={showFinishModal}
        >
            <View style={modalStyles.centeredView}>
              <View style={modalStyles.modalView}>
                <Text style={modalStyles.modalText}>Estas por completar pago de ${total}</Text>
                <Pressable
                  style={[modalStyles.button, modalStyles.buttonClose]}
                  onPress={handleConfirmation}
                >
                  <Text style={modalStyles.textStyle}>Vamos!</Text>
                </Pressable>
              </View>
            </View>
        </Modal>
    )
};

export default withNavigation(FinishModal);