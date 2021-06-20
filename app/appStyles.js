import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#333131"
    },
    textInputContainer:{
        alignSelf:"center",
        backgroundColor:"#4a4646",
        borderRadius:10,
        margin:10,
        padding:5,
        width:"90%",
    },
    textInputLabel:{
        color:"white",
        fontSize:18
    },
    textInput:{
        color:"black",
        borderWidth:2,
        borderColor:"black",
        backgroundColor: "#eae1dd",
        paddingLeft:10 
    },
    listItem:{
        margin: 5,
        padding: 5,
        color: "slategrey",
        backgroundColor: "ghostwhite",
        textAlign: "center"
    },
    titleOrHeader:{
        fontFamily:"monospace",
        fontSize:15,
        backgroundColor:"rgba(111, 72, 49,0.8)",
        /* backgroundColor:"#f06414", */
        color:"white",
        padding:20
    }
});