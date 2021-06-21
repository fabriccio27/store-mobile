import React from 'react';
import {View, Text} from "react-native";
import appStyles from '../appStyles';

function Item({item}) {
    //ver que esto deberia tener un display tipo row con varios Text adentro
    return (
        <View style={appStyles.listItem}>
            <Text>{item.description} | {item.value}</Text>
        </View>
    );
}

export default Item;