import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React from "react";
import { View, Text } from "react-native";


export default function App() {
    return (
<View style={{flex: 1}}>
    <ProgressSteps>
        <ProgressStep label="First Step">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 1!</Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 2!</Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Third Step">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 3!</Text>
            </View>
        </ProgressStep>
    </ProgressSteps>
</View>
    );
}

// const buttonTextStyle = {
//     color: '#393939'
// };

// return (
//     <View style={{flex: 1}}>
//         <ProgressSteps>
//             <ProgressStep label="First Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
//                 <View style={{ alignItems: 'center' }}>
//                     <Text>This is the content within step 1!</Text>
//                 </View>
//             </ProgressStep>
//             <ProgressStep label="Second Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
//                 <View style={{ alignItems: 'center' }}>
//                     <Text>This is the content within step 2!</Text>
//                 </View>
//             </ProgressStep>
//         </ProgressSteps>
//     </View>
// )