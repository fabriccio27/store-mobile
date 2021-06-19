import React from "react";

const ViewSelfClosingExample = ()=>{
  return(
      <View style={{
            flexDirection:"row",
            height:100,
            marginTop:20
          }}>
            <View style={{backgroundColor:"red", flex:0.3}}/>
            <View style={{backgroundColor:"blue", flex:0.5}}/>
            <Text>Hola a todos</Text>
      </View>
  );
};

export default ViewSelfClosingExample;
