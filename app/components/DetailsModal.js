import React from "react";
import {Modal, Text, Pressable, View} from "react-native";
import modalStyles from "../styles/modalStyles";


const DetailsModal = ({total, detailModalVisible, setDetailModalVisible}) =>{
    return(
        <Modal
              animationType="slide"
              transparent={true}
              visible={detailModalVisible}
              onRequestClose={() => {
                setDetailModalVisible(!detailModalVisible);
              }}
            >
                <View style={modalStyles.centeredView}>
                  <View style={modalStyles.modalView}>
                    <Text style={modalStyles.modalText}>{total==0?"Aun no compraste nada":"Resumen"}</Text>
                    <Pressable
                      style={[modalStyles.button, modalStyles.buttonClose]}
                      onPress={() => setDetailModalVisible(!detailModalVisible)}
                    >
                      <Text style={modalStyles.textStyle}>Ok</Text>
                    </Pressable>
                  </View>
                </View>
            </Modal>
    )
};

export default DetailsModal;