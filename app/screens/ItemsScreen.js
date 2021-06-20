import React from 'react';
import {View, Text} from "react-native";
import loading from '../utils/loading';
//este va wrappeado porque supuestamente fui a buscar info de items
const  ItemsScreen = loading(() => {
    return (
        <View>
            <Text>You got to the items list screen</Text>
        </View>
    );
})

export default ItemsScreen;