import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#8c9ba0"
    },
    scrollviewContainer:{
        flex:1
    },
    imageWithinScrollView:{
        color:"red"
    },
    textInputContainer:{
        
        alignSelf:"center",
        backgroundColor: "rgba(77, 65, 60,0.7)" ,
        borderRadius:5,
        margin:5,
        padding:5,
        width:"90%",
    },
    textInputLabel:{
        color:"white",
        fontSize:15
    },
    textInput:{
        color:"black",
        backgroundColor: "#eae1dd",
        paddingLeft:10 
    },
    listItem:{
        alignSelf:"center",
        flexDirection:"column",
        justifyContent:"space-between",
        margin: 5,
        padding: 10,
        color: "slategrey",
        backgroundColor: "ghostwhite",
        textAlign: "center",
        width:"80%"
    },
    titleOrHeader:{
        fontFamily:"monospace",
        fontSize:15,
        backgroundColor:"rgba(111, 72, 49,0.8)",
        color:"white",
        padding:20
    },
    logo:{
        width:128,
        height:128
    },
    backgroundImage:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:"100%"
    },
    greenMessage:{
        backgroundColor:"green",
        color:"white",
        fontWeight:"bold",
        marginBottom:5,
        paddingHorizontal:5
    },
    pendingMessage:{
        color:"white",
        backgroundColor:"crimson",
        marginBottom:5,
        padding:5
    },
    amountButton:{
        backgroundColor:"lightblue",
        borderRadius:20,
        color:"white",
        fontSize:20,
        margin:5,
        padding:10,
        textAlign:"center",
        width:40
    },
    amountNumber:{
        fontSize:20,
        marginTop:10
    },
    itemTitle:{
        fontWeight:"bold",
        fontSize:22,
        textAlign:"center"
    },
    itemPrice:{
        fontSize:20,
        marginLeft:10,
        paddingTop:5
    },
    upperCardSection:{
        /* flexDirection:"row", */
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20
    },
    welcomeButton:{
        backgroundColor:"#2b0f07",
        borderRadius:2,
        marginVertical:5,
        padding:13
    },
    welcomeButtonText:{
        color:"white",
        fontSize:15
    },
    shareBottomText:{
        color:"white", 
        fontWeight:"bold", 
        textAlign:"center", 
        marginVertical:5, 
        width:"60%"
    },
    backgroundImageCategories:{
        flex:1, 
        width:"100%", 
        justifyContent:"space-evenly", 
        alignItems:"center"
    }
});