import React from 'react';
import {Text} from "react-native";

function CategoryTitle({title}) {
    
    return (
        <Text style={{color:"#2f2cb0", textAlign:"center", paddingLeft:20}}>
            {title}
        </Text>
    );
}

export default CategoryTitle;